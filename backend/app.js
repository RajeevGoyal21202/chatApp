const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./config/db.js");
const { router } = require("./routes/index.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
  }));

app.use("/",router)


dotenv.config();

const port = process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`App is running on port no ${port} sucessfully`)
})
connectDb();


