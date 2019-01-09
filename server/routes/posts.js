const express = require('express');
const router = express.Router();
const PostsController =require('../controller/PostController');
const is_auth = require('../middelware/is-auth');
const upload  =require('../middelware/upload');


//index display all
router.get('/',PostsController.getAll);
//create
router.post('/create', upload , PostsController.create);
//display one
router.get('/:id', PostsController.showOne);
//edit
router.patch('/edit/:id',PostsController.edit);
//delete
router.delete('/:id', PostsController.delete);



module.exports = router;