const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Email: String,
    Password: String,
    Balance:Number,      // USD

    /* Thong tin */
    Image:String,
    Name:String,
    Address:String,
    Phone:String,

    /* System */
    RandomString: String,
    Active: Boolean,
    UserGroup: Number,   // 1:Admin, 0 Khách hàng
    RegisterDate:Date,

    Socket:String
});
module.exports = mongoose.model("User", userSchema);