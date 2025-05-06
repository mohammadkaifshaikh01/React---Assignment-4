import BookModel from "../model/library.model.js";

const addBook = async (req, res) => {
  try {
    const { title, author, genre, description, year, cover } = req.body;
    console.log("check", title, author, genre, description, year, cover);

    if (!title || !author || !genre || !description || !year || !cover) {
      return res.status(400).json({
        message: "Please Fill All Fields...",
      });
    }

    const newBook = await BookModel.create({
      title,
      author,
      genre,
      description,
      year,
      cover,
    });

    console.log(newBook);
    return res.status(201).json({
      message: "Book Added Successfully.....",
      newBook,
    });
  } catch (error) {
    // console.log(error)

    return res.status(500).json({
      message: "Server Error...",
    });
  }
};

const getBook = async (req, res) => {
  try {
    const books = await BookModel.find();
    console.log(books);
    return res.status(200).json({
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Can Not Fetch Data Please Try Again",
    });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const { title, description, year, author, genre , cover } = req.body;
    const updatebook = { title, description, year, author, genre ,cover};

    await BookModel.updateOne({ _id: id }, updatebook);
    return res.status(200).json({
      message: "Book Updated Successfully...",
      updateBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Can't Updated Book",
    });
  }
};

const deleteBook = async(req,res)=>{
   const id = req.params.id
   try {
      const deletebook = await BookModel.findByIdAndDelete(id)
      res.status(200).json({
         message : "Book Deleted Successfully...",
         deleteBook
      })
   } catch (error) {
      console.log(error)
      res.status(400).json({
         message : "Book Not Deleted...."
      })
   }
}

export { addBook, getBook, updateBook ,deleteBook };
