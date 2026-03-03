const { text } = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const userSchema = require("./user.schema");

const otpStorage = new Map();

let transporter;

try {
 transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILSECRET
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 90000,
  greetingTimeout: 30000,
  socketTimeout: 90000,
});

   console.log("Email transporter created successfully");
   console.log(`Email: ${process.env.EMAIL}`);

   transporter.verify((error, success) => {
    if (error) {
        console.error("Error verifying email transporter:", error);
    } else {
        console.log("Email transporter is ready to send emails");
    } });




} catch (error) {
    console.error("Error creating email transporter:", error);
}

// function to get OTP for a given email
function generateOTP(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}
 function storeOTP(email, otp){
    const expiryTime = Date.now() + 10 * 60 * 1000; // OTP valid for 5 minutes
    otpStorage.set(email, {otp, expiryTime, attempts: 0

    })
    return expiryTime;
}
 
async function sendOTPEmail(email, otp){
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP Code",
        html: ` <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;">
         <h2>Your OTP Code is:</h2>
         <div style="font-size: 24px; font-weight: bold; color: #333; margin-top: 10px; background-color: #e0e0e0; padding: 10px; border-radius: 5px; display: inline-block;">
              <h1 style="color: #007bff; font-size: 36px;">${otp}</h1>
         </div>
        </div>`,
        text: `Your OTP Code is: ${otp}. This OTP is valid for 10 minutes.`,
    };
    return await transporter.sendMail(mailOptions);
}

async function sendOTP(req, res) {
    try{
        const {email}= req.body;
        if(!email){
            return res.status(400).json({
                success: false,
                error: "email is required"
            })

        }
        const otp =generateOTP();
        const expiryTime = storeOTP(email, otp);

        await sendOTPEmail(email, otp);
        return res.status(200).json({
            success: true,
            message: `OTP sent to ${email}, expire in 10min`
        })
    }catch(error){
        console.log("Error sending OTP email:", error);
        return res.status(500).json({
            success: false,
            error: "Failed to send OTP email"
        })
    }
    
    
} 
 async function verifyOTP(req, res){
    try{
        const {email, otp} = req.body;
        if(!email || !otp){
            return res.status(400).json({
                success: false,                
                error: "email and otp are required"
            })
        }
        const storedOTPData = otpStorage.get(email);
        if(!storedOTPData){
            return res.status(400).json({
                success: false,
                error: "No OTP found for this email"
            })
        }
        if(storedOTPData.expiryTime < Date.now()){
            otpStorage.delete(email);
            return res.status(400).json({
                success: false,
                error: "OTP has expired"
            })
        }
        if(storedOTPData.otp === otp.storage()){
            const verifyemail = await userSchema.findOne({email});
            if(!verifyemail){
                let jwtToken = jwt.sign({email: verifyemail.email,
                    userId: verifyemail._id,

                }, process.env.JWTSECRET, {expiresIn: "1d"});
                otpStorage.delete(email);
                return res.status(200).json({
                    success: true,
                    message: "OTP verified successfully",
                    data: {accessToken: jwtToken}
                })
            }
        }else{
                storedOTPData.attempts += 1;
                if(storedOTPData.attempts >= 3){
                    otpStorage.delete(email);
                    return res.status(400).json({
                        success: false,
                        error: "Too many failed attempts. OTP has been deleted."
                    })
                }
                return res.status(400).json({
                    success: false,
                    error: "Invalid OTP"
                })
        }
    }catch(error){
        console.log("Error verifying OTP:", error);
        return res.status(500).json({
            success: false,
            error: "Failed to verify OTP"
        })
    }
    }


module.exports = {
    sendOTP,
    verifyOTP
}