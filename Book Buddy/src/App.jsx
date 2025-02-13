import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import BookList from './BookList';
import BookDetails from './BookDetails';
import Login from './Login';
import Register from './Register';

const App = () => {
  const item = useLocation();
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/BookList' element={<BookList />} />
        <Route path='/BookDetails' element={<BookDetails />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const bookId = window.location.pathname.split('/').pop();

  useEffect(() => {
    fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/#-get-api-books-bookid-${bookId}`)
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