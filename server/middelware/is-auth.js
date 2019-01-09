module.exports = (req, res, next)=>{
    let token = req.body.token;
    
    if (!token) {
       
        res.status(500).json({message: 'user is not authorized'})    
    }

    next();

}