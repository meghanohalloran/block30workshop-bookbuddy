import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
