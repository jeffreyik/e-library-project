import books from '../data'
import Book from '../components/Book'

const Books = () => {
  return (
    <div class="books-page">
  <div class="book-grid">
    <div class="grid-head">
      <h2>Web Books</h2>
      <button class="view-all-btn">
        View All
      <img src="/assets/chevron-right.svg" alt="" /></button>
    </div>
    <div class="books">
    {books.map(book => {
        return (
          book.category === 'computer networking' && <Book key={book.id} book={book} />
        )
      })}
    </div>
  </div>
  <div class="book-grid">
    <div class="grid-head">
      <h2>Networking Books</h2>
      <button class="view-all-btn">
        View All
      <img src="/assets/chevron-right.svg" alt="" /></button>
    </div>
    <div class="books">
    {books.map(book => {
        return (
          book.category === 'Web Technology' && <Book key={book.id} book={book} />
        )
      })}
    </div>
  </div>
</div>
  )
}

export default Books;