const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.signup = (req, res, next) => {
    const data = req.body;
    console.log(data.email, data.name, data.password);
    
    User.findOne({ where: { email: data.email } })
        .then(result => {
            if (result) {
                res.json({ message: 'this email aleardy exist' });
            }
            return bcrypt.hash(data.password, 12)
        }).then(hashedPassowrd => {
            User.create({
                email: data.email,
                name: data.name,
                password: hashedPassowrd
            }).then(respons => {
                
                const token = jwt.sign(
                    {email:respons.email, userId: respons.id},
                    "secet_this",
                    {expiresIn: "1h"}
                );

                res.status(200).json({
                    message: ' account created successfuly', 
                    userId: respons.id,
                    token: token,
                    expiresIn: 3600, })
            })
        })
        .catch(err => {
            res.status(500).json({ message: ' err ' + err })
        }) 
}


//login 
exports.login = (req, res, next) => {
    const data = req.body;
    console.log(data.email, data.password);

     let fetchedUser;

    User.findOne({where:{email: data.email}})
    .then(user => {
        if (!user) {
             res.json({message:'user is not found'});
        }
        fetchedUser = user ;
        return bcrypt.compare(data.password , user.password);
    })
    .then( doMatch =>{
            if (doMatch) {
                // token for logedin user
                const token = jwt.sign(
                    {email:fetchedUser.email, userId: fetchedUser.id},
                    "secet_this",
                    {expiresIn: "1h"}
                );

                res.status(200).json({
                    token: token,
                    expiresIn: 3600,
                    userId: fetchedUser.id
                });
            }
            res.json({message:'invalid email or password'});
    })
    .catch(err=>{
        console.log(err);
    }) 

}



exports.userInfo = (req, res, next) => {

    
     User.findOne({where:{id: req.body.id}})
     .then(respons => {
         res.status(200).json({
              email: respons.email,
              name:respons.name
            })
     })
     .catch(err=>{
         console.log(err)
     })
}