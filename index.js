const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');

// Import Routes
const userRoutes = require('./routes/users');

// Config App
const app = express();
require('dotenv').config();

// Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected ...'))
    .catch(() => console.error('Database not connected !'))

// Middleware
app.use(express.json());
app.use(expressValidator());

// Routes Middleware
app.use('/api/users', userRoutes);

// Config Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`))