const mongoose=require("mongoose")
const todoListSchema=mongoose.Schema({
task:{
type:String,
required:true
},
time:{
type:String,
required:true
},
subtask:{
    type:String,
}
},{ timestamps: true }
)

module.exports=mongoose.model("todoListModel",todoListSchema)