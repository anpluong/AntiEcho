const Articles = require('./articleModel.js');
const User = require('./userModel');
const userController = {};

console.log(userController);

userController.findOneOrCreate = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, result) => {
        if (result) {
            console.log("hello");
            return res.send('Duplicated ID');
        }
        else {
        console.log("hello");
        User.create({facebook_id: "an", artistName: "Jackson"})
            .then((result) => {
                // Everything worked out
            })
            .catch((err) => {
                // Something went wrong
            });
        return res.send("data is inserted");
        }
    });
    
};

module.exports = userController;