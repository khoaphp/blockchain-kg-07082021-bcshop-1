//Models
var User = require("../models/user");

module.exports = function(app, obj){

    app.get("/", function(req, res){
        var newUser = new User({
            Email: "abc@abc.ccc",
            Password: "123123",
            Balance:1000,
        });
        res.json(newUser);
    });

    app.get("/register", function(req, res){
        res.render("frontend/master", {obj:obj, page:"register"});
    });

    app.get("/login", function(req, res){
        res.render("frontend/master", {obj:obj, page:"login"});
    });

}