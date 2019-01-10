const Posts = require('../models/Posts');




//index show all
exports.getAll = (req, res, next) => {

    Posts.findAll()
        .then(respons => {
            res.status(200).json({ data: respons })
        })
        .catch(err => {
            console.log(err);
        })
}

// create 
exports.create = (req, res, next) => {
    let formData = req.body;

    console.log(formData.title, formData.text);



    Posts.create({
        titel: formData.title,
        text: formData.text,
        image: "this image"
    })
        .then(respons => {
            res.status(200).json({ message: respons });
        })
        .catch(err => {
            console.log(err);
        })

    //res.status(200).json({message:'create'})
}

//show one by id
exports.showOne = (req, res, next) => {
    let postId = req.body.id;

    Posts.findById(postId)
        .then(respons => {
            res.status(200).json({ data: respons })
        })
        .catch(er => {
            res.status(500).json({ data: err })
        })
}

//edit post
exports.edit = (req, res, next) => {

    let formData = req.body;

    Posts.findById(formData.id)
        .then(post => {
            post.titel = formData.title;
            post.text = formData.text;
            post.image = formData.image;

            return post.save();
        })
        .then(result => {
            res.status(200).json({ data: result, message: "posts Updated" })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })

    // res.status(200).json({message:'edit'})
}

//delete post 
exports.delete = (req, res, next) => {
    let postId = req.body.id;

    Posts.findById(postId)
        .then(post => {
            return post.destroy();
        })
        .then(result => {
            json.status(200).json({ message: "POST DESTROYED" })
        })
        .catch(err => {
            console.log(err)
        })
    // res.status(200).json({message:'delete'})
}

