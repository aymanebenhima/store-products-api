const express = require('express');
const mongoose = require('mongoose');

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

// Routes Middleware
app.use('/api/users', userRoutes);

// Config Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`))