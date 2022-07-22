const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    author_name: String,
    title: String,
    descriptions: String,
    content: String,
    comment: String,
});
  
const publish = mongoose.model('publish', bookSchema);




module.exports = publish;

