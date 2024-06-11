const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://adarshp:beenasadu@cluster0.6nnmmnj.mongodb.net/courseapp?retryWrites=true&w=majority&appName=Cluster0")


app.post("/Addcourse", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    console.log(course)
    res.json({ "status": "success" })

})
app.get("/Viewall", (req, res) => {
    coursemodel.find().then(
        (data)=>{
            res.json(data)

        }

    )
    
})
app.listen(8087, () => {
    console.log("server started")
})