const express = require('express');
const fs = require('fs');


const getAllUsers =(req, res) => {
  
  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file', err);
      return res.send('Error reading file');
    }
    const users = data.split(',\n').filter(u => u.trim() !== '').map(u => JSON.parse(u));
     res.send({success: true, data: users});
   
 
  });
  
};

const createUser =(req, res) => {
  const content = `${req.body.content} @${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}\n`;
  console.log(content);
  //fs.writeFile('newfile.txt', content, (err) => {
    fs.appendFile('newfile.txt', content, (err) => {
    if (err) {
      console.error('Error creating file', err);
    } 
  });
  console.log('File created successfully');
  res.send('File created successfully');
};

const userDetails =(req, res) => {
  const name = `${req.body.name} is my name @${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}\n`;
  console.log(name );
  //fs.writeFile('newfile.txt', content, (err) => {
    fs.appendFile('newfile.txt', name, (err) => {
    if (err) {
      console.error('Error creating file', err);
    } 
  });
  console.log('File created successfully');
  res.send('File created successfully');
};

const registerUser =(req, res) => {
   const {name, age} = req.body;
   let user;
   if(!name && !age){
     return res.send( 'name and age are required');
   }
   user = {name, age, balance: 5000, registeredAt: new Date().toLocaleString()};
   console.log(user);
   fs.appendFile('users.txt', `${JSON.stringify(user)},\n`,(err) => {
     if (err) {
       console.error('Error writting log', err);
       return res.send('failed to create log');
     }
 });
 console.log('User registered successfully');
 res.send(user);
};

const readUserLogs = (req, res) => {
  
  fs.readFile('newfile.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file', err);
      return res.send('Error reading file');
    }
     res.send({success: true, data: data});
 
  });
  
}

module.exports = {
  getAllUsers,
    createUser,
    userDetails,
    registerUser,
    readUserLogs
}