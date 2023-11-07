const express = require("express");
const app = express();
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const adminRouter = require("./src/routers/admin");
const multer = require("multer");
let port = process.env.PORT || 5000;
//controller
const { createUserController, getUserController } = require("./src/controllers/user.controller")

app.use(cors());
app.use(json());
app.use("/admin", adminRouter);

// mongodb connect
const uri =  "mongodb+srv://saidaliyevjasur450:yoljasron1221@uts.xjxxbnl.mongodb.net/";
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected MongoDB ");
    } catch (error) {
        console.log(error);
    }
}
connect();


app.get("/", (req, res) => {
    res.send("hello world. I'm JasurBek");
});

app.post("/user", createUserController)
app.get("/user", getUserController)

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
});