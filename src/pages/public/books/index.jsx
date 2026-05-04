import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => setBooks(response.data.slice(0, 6)));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {books.map((book) => (
          <div key={book.id} className="shadow-lg p-5 rounded-lg">
            <h2 className="font-bold text-xl">{book.title}</h2>

            <Link to={`/books/${book.id}`} className="bg-blue-500 text-white px-4 py-2 inline-block mt-3 rounded">
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
