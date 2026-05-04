import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Show() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => setBook(response.data));
  }, [id]);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">{book.title}</h1>
      <p>{book.body}</p>
    </div>
  );
}
