const User = require("../models/user");

const getUserController = async (req , res)=>{
    const user = await User.find();
    res.status(200).json({user})
}

const createUserController = async (req, res) => {
    try {
        const { text, email } = req.body;

        const candidate = await User.findOne({ email });
        if (candidate)
            return res.status(400).json({ message: "Email already exits " });

        const newUser = {
            text: text,
            email: email,
        };
        const user = await new User(newUser).save();

        res.status(201).json({ message: "Request succesfully sended", data: user });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    createUserController , 
    getUserController
}