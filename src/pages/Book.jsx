import { useEffect } from "react";
import { useParams } from "react-router-dom";
import books from "../data";

const Book = () => {
  const { bookid } = useParams('bookid')
  const book = books.find(book => book.id == bookid)
  
  useEffect(() => {
    console.log(bookid)
  }, [])

  return (
    <div className="book-description">
      <div className="book-col">
        <img src={book.cover} alt="" className="book-thumbnail" />
        <div className="book-col-2">
          <h1>{book.title}</h1>
          <div className="book-col-author">by {book.author}</div>
          <a href={book.link} download={true}><button className="download">Download Book</button></a>
        </div>
      </div>
    </div>
  )
}

export default Book;