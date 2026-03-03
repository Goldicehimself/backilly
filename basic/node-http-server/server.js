const express = require('express');
const fs = require('fs');
const { getAllUsers, createUser, userDetails, registerUser, readUserLogs } = require('./controller.js');
const connectDB = require('./Database/dbconnection.js');
const { userRouter } = require('./src/modules/user/user.router.js');
const { restaurantRouter } = require('./src/modules/restaurant/restaurant.router.js');
const { ordersRouter } = require('./src/modules/order/orders.router.js');
const { itemRouter } = require('./src/modules/item/item.router.js');
const path = require('path');
const EXPRESSPORT = 6000;


const app = express();
app.use(express.json());
require('dotenv').config();


//image retrieval
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// declear some route
app.get('/', (req, res) => {
  res.send('Hello, World! How Una dey ?');

});

app.get('/health', (req, res) => {
  res.send('server health page');
});

app.post('/create', createUser );

app.post('/details', userDetails);
 app.post('/register', registerUser);


app.use("/api/v1/user", userRouter);

app.use("/api/v1/restaurant", restaurantRouter);

app.use("/api/v1/order", ordersRouter);
app.use('/api/v1/item', itemRouter);

app.get('/read',readUserLogs);
app.get('/getUsers', getAllUsers);



  
connectDB();
app.listen(EXPRESSPORT, () => {
  console.log(`server is running on http://localhost:${EXPRESSPORT}`);
});

// const http = require('http');

// const PORT = 5000;

// const server = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello, World! How Una dey ?\n'); 
// });
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });