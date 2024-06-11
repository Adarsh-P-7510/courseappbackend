const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "coursetitle":String,
        "coursedescription":String,
        "date":String,
        "duration":String,
        "venue":String,
        "trainer":String
        
    }
)
let coursemodel = mongoose.model("courses",schema)
module.exports={coursemodel}