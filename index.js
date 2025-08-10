require("@dotenvx/dotenvx").config();
const express = require("express");
const userRoutes = require('./routes/user.routes.js')
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use (cors());
const PORT = process.env.PORT || 3000

app.use(express.json());
 
app.get('/', (req, res) => {
    res.send('Hello World!');
})

 
app.get('/home', (req, res) => {
    res.send('home home home!');
})
 
//userRoutes
app.use('/api/v1/users',userRoutes)
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
 .then(() => {
    console.log("Connected to MongoDB Successfully!!");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
    })
.catch((error) => {
    console.error("Error connection failed!!:", error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
    