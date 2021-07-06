const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected ...'))
    .catch(() => console.error('Database not connected !'))

app.get('/', (req, res) => res.send({message: 'Hello first line of my code'}))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`))