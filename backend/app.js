const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./config/db.js");
const { router } = require("./routes/index.js");
const app = express();

app.use(express.json());
app.use("/",router)
dotenv.config();

const port = process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`App is running on port no ${port} sucessfully`)
})
connectDb();


