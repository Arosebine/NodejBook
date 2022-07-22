const express = require("express");
const publish = require("../models/BookSchema");
const router = express.Router();





router.post("/create", async(req, res)=>{
    console.log(req.body);
    const author_name= req.body.author_name;
    const title= req.body.title;
    const descriptions = req.body.descriptions;
    const content = req.body.content;
    const comment = req.body.comment;

    const newBook = new publish({
        author_name,
        title,
        descriptions,
        content,
        comment
    });
    await newBook.save();
    return res.status(201).json('You have successfully registered')
});


router.get("/books", async (req, res)=>{
    const get_allBook = await publish.find();
    return res.status(200).json(get_allBook);
});


router.put("/booktitle/:id", async(req, res)=>{
    const id = req.params.id
    const { author_name, title, descriptions, content, comment } = req.body
    const update_book = await publish.findByIdAndUpdate(
        {_id: id},
        {author_name,
        title,
        descriptions,
        content,
        comment
        },
    
    {
        new: true,
    },
    );
    return res.status(200).json('updated successfully')
});


router.delete('/delete/:id', async (req, res)=>{
    const id = req.params.id
    const delete_update = await publish.findByIdAndDelete({_id: id});
    return res.status(200).json("it has deleted successfully");
});




module.exports = router;
