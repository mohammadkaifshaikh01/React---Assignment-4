import mongoose from "mongoose"

const ConnectDb = async()=>{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("MongoDb Connected Successfully")
}

export default  ConnectDb