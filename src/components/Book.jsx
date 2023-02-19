import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div class="book">
        <Link to={`/${book.id}`}>
          <img src={ book.cover } alt="" class="book-cover" />
          <div class="book-description">
            <h3 class="book-title">{ book.title }</h3>
            <p class="book-author">{ book.author }</p>
          </div>
        </Link>
    </div>
  )
}

export default Book;