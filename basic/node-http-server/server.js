const express = require('express');
const fs = require('fs');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const cors = require('cors');
const rateLimit = require('express-rate-limit');
const QRCode = require('qrcode');
const { getAllUsers, createUser, userDetails, registerUser, readUserLogs } = require('./controller.js');
const connectDB = require('./Database/dbconnection.js');
const { userRouter } = require('./src/modules/user/user.router.js');
const { restaurantRouter } = require('./src/modules/restaurant/restaurant.router.js');
const { ordersRouter } = require('./src/modules/order/orders.router.js');
const { itemRouter } = require('./src/modules/item/item.router.js');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, "apidoc.yaml"));
const { trackRouter } = require('./src/modules/tracking/track.route.js');
const EXPRESSPORT = 5000;

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});



app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', method: ['GET', 'POST']}));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
require('dotenv').config();
app.use(limiter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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
app.use('/api/v1/tracking', trackRouter);

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
