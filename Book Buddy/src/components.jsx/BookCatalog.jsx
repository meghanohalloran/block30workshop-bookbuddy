import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCatalog;
