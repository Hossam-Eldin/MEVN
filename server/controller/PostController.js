const Posts = require('../models/Posts');




//index show all
exports.getAll = (req, res,next) =>{
    res.status(200).json({message:'index'})
}

// create 
exports.create = (req, res, next) => {
    let formData = req.body;

    console.log(formData.title, formData.text);

    //Posts.create({})
    
    //res.status(200).json({message:'create'})
}

//show one by id
exports.showOne = (req , res, next) => {
    res.status(200).json({message:'showOne'})
}

//edit post
exports.edit = (req, res, next) => {
    res.status(200).json({message:'edit'})
}

//delete post 
exports.delete = (req, res, next) => {
    res.status(200).json({message:'delete'})
}

