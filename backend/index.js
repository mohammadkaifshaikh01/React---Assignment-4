import express from "express"
import dotenv from "dotenv"
import ConnectDb from "./src/config/Db.js"
import bookRoute from "./src/routes/book.routes.js"

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 5000

app.use("/books" , bookRoute)

app.listen(PORT,()=>{
   console.log("Server Is Running On This Port" , PORT)
   ConnectDb()
})

