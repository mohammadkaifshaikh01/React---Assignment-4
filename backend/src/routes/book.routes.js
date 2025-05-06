import express from "express"
import {addBook ,deleteBook,getBook ,updateBook} from "../controller/library.controller.js"


const bookRoute = express.Router()


bookRoute.post("/add-book" , addBook)
bookRoute.get("/get-book" , getBook)
bookRoute.patch("/update-book/:id" , updateBook)
bookRoute.delete("/delete-book/:id" , deleteBook)


export default  bookRoute