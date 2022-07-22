const dotenv = require("dotenv");
dotenv.config();



const port = process.env.PORT || 4500

const express = require("express");
const { default: mongoose } = require("mongoose");
const book = require("./routes/book");
const BookSchema = require("./models/BookSchema");
const app = express();
app.set(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(book);



mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('we are live on DataBase');
});

app.listen(port, ()=>{
    console.log(`we are live on ${port}`);
    console.log(process.env.NODE_ENV);
})
