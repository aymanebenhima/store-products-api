const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => res.send({message: 'Hello first line of my code'}))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`))