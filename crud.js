const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/testDB";
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const axios=require("axios")

mongoose
  .connect(url)
  .then(() => {
    console.log("mongoDB connected Successfully");
  })
  .catch(() => {
    console.log("MongoDb is not connected");
  });

//Creating a schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  grade: String,
  mail: String,
});
const Student = mongoose.model("Student", studentSchema);

//Creating data
app.post("/student", async (req, res) => {
  try {
    const creatdata = await Student.insertMany(req.body);
    res.status(200).send(creatdata);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//read the data
app.get("/student", async (req, res) => {
  try {
    const getdata = await Student.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});
//update the data
app.put("/student/:name", async (req, res) => {
  try {
    const updatedata = await Student.updateOne(
      { name: req.params.name },
      { $set: req.body }
    );
    res.status(200).send(updatedata);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});
//delete the data
app.delete("/student/:name", async (req, res) => {
  try {
    const deletedata = await Student.deleteOne({ name: req.params.name });
    res.status(200).send(deletedata);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});
//https://reqres.in/api/users?page=1&per_page=50
//fetch the data
app.get("/api",async(req,res)=>{
    try{
        const api="https://reqres.in/api/users?page=1&per_page=50"
        const fetchdata=await axios.get(api)
        console.log(fetchdata.data)
        const filterasname=fetchdata.data.data
        const result=filterasname.filter((ele)=>ele.first_name=="George")
        res.status(200).json(filterasname)
    }catch(error){
        res.status(404).send({message:error.message})
    }
})

app.listen(port, () => {
  console.log(`The port is ruiing at ${port}`);
});
