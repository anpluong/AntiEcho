const Articles = require('./articleModel.js');
const User = require('./userModel');
const userController = {};

console.log(userController);


//Create a signup
userController.findOneOrCreate = (req, res, next) => {
    User.findOne({email: req.body.email
//        email: "johndoe@gmail.com"
        }, (err, result) => {
        if (result) {
            console.log("duplicate");
            return res.send(result);            
        }
        else {
        User.create({
            //email:          "johndoe@gmail.com",
            //fullName:       "John Doe",            
            email:          req.body.email,
            fullName:       req.body.fullName,
            favorites:      [],
            slider:         0,
            sources:        {}        
        })
            .then((result) => {
                // Everything worked out
                console.log("everything works")
            })
            .catch((err) => {
                // Something went wrong
                console.log("something is wrong")
            });
        return res.send("data is inserted");
        }
    });    
};

//updates for favorites section
userController.updateFavorites = (req, res, next) => {
    User.update( 
        //{email: "johndoe@gmail.com"}, 
        {email: req.body.email},        
        //{$set: {favorites: ["pink", "red"]}},         
        {$set: {favorites: req.body.favorites}},         
        (error, result) => {
            if (result) 
                console.log("favorites are updated");
            else 
                console.log("Unable to update");
        }
    )
    return res.send("favorites are updated");
}

userController.updateSlider = (req, res, next) => {
    User.update( 
        //{email: "johndoe@gmail.com"}, 
        {email: req.body.email},     
        //{$set: {slider: 2}},         
        {$set: {slider: req.body.slider}},         
        (error, result) => {
            if (result) 
                console.log("slider is updated");
            else 
                console.log("Unable to update");
        }
    )
    return res.send("Slider is updated");
}

module.exports = userController;