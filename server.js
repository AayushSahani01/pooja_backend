const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

 
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(port, () => {
        console.log('Connected to MongoDB');
        console.log(`Server is running on http://localhost:${port}`);
        });
})
.catch(err => {
    console.error('MongoDB connection error:', err);
}); 
