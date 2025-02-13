import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>ID: {book.id}</p>
      <p>Created By Author: {book.author}</p>
    </div>
  );
};

export default BookDetails;