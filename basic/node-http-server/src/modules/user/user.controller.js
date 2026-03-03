const express = require('express');
const bcrypt = require('bcryptjs');
const userschema = require('./user.schema.js');
const jwt = require('jsonwebtoken');

const registeredUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Registering user with data:', { name, email, password }); // ✓ Show password in console
    
    try {
        // Check if email already exists
        const verifyEmail = await userschema.findOne({ email: email });
        if (verifyEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Hashed password:', hashedPassword);

        // Create new user with hashed password
        const newUser = new userschema({ 
            name, 
            email, 
            password: hashedPassword
        });
        
        const savedUser = await newUser.save();
        console.log('Saved user (with password):', savedUser); // ✓ Show full user in console
        
        // ✓ Remove password before sending response
        const userResponse = savedUser.toObject();
        delete userResponse.password;
        
        return res.status(201).json({ 
            success: true, 
            message: 'User registered successfully', 
            data: userResponse // ✓ Password hidden from API response
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password }); // ✓ Show password in console
    
    try {
        // Find user
        const user = await userschema.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Authorization failed' 
            });
        }

        console.log('Found user (with password):', user); // ✓ Show full user in console

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid password' 
            });
        }

        // Generate JWT token
        const jwtoken = jwt.sign({
            email: user.email,
            userId: user._id,
        }, process.env.JWTSECRET, { expiresIn: "1d" });

        // ✓ Remove password before sending response
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({ 
            success: true, 
            data: { 
                token: jwtoken,
                user: userResponse // ✓ Password hidden from API response
            },
            message: 'Login successful',
        });
        
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
};

const findOneUser = async (req, res) => {
    const { email } = req.body;
    // const name = req.userData.name;
    console.log('Finding user:', { email }); // ✓ Show in console
    
    try {
        const user = await userschema.findOne({ email: email, name: name });
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        console.log('Found user (with password):', user); // ✓ Show full user in console

        // ✓ Remove password before sending response
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({ 
            success: true, 
            message: 'User found', 
            data: userResponse // ✓ Password hidden from API response
        });
    } catch (error) {
        console.error('Find user error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
};

module.exports = { registeredUser, login, findOneUser };