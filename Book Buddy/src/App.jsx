import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BooksList from '.'


const App = () => {

  return (
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<BookCatalog /> } />
      <Route path='/books/:id' element={<BookDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
  
      </Routes>
      </BrowserRouter>
  
  );
};
const BookCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`/books/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const bookId = window.location.pathname.split('/').pop();

  useEffect(() => {
    fetch(`https://api.example.com/books/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);

  if (!book) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default App;


