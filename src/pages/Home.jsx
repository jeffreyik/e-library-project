import Heroimage from '../assets/bookimage.png'
import Book from '../components/Book'
import books from '../data'

const Home = () => {

  return (
    <div class="home-page">
  <div class="hero-section">
    <div class="hero-content">
      <h1>New and Trending Books</h1>
    </div>
    <img src={Heroimage} alt="" class="hero-images" /> 
  </div>
  <div class="book-grid">
    <div class="grid-head">
      <h2>Latest Books</h2>
      <button class="view-all-btn">
        View All
      <img src="/assets/chevron-right.svg" alt="" /></button>
    </div>
    <div class="books">
      {books.map(book => {
        return (
          <Book key={book.id} book={book} />
        )
      })}
    </div>
  </div>
</div>
  )
}

export default Home;