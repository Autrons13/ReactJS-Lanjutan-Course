import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../_api";

export default function Create() {
  const navigate = useNavigate();
  20;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [genreId, setGenreId] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getAuthors();
    getGenres();
  }, []);

  const getAuthors = async () => {
    const response = await api.get("/authors");
    setAuthors(response.data.data);
  };

  const getGenres = async () => {
    const response = await api.get("/genres");
    setGenres(response.data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/books", {
        title,
        description,
        author_id: authorId,
        genre_id: genreId,
      });
      navigate("/admin/books");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Create Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="w-full p-3 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} />

        <textarea placeholder="Description" className="w-full p-3 border rounded" value={description} onChange={(e) => setDescription(e.target.value)} />

        <select className="w-full p-3 border rounded" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Choose Author</option>

          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>

        <select className="w-full p-3 border rounded" value={genreId} onChange={(e) => setGenreId(e.target.value)}>
          <option value="">Choose Genre</option>

          {genre.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <div className="flex gap-3">
          <button className="px-5 py-3 text-white bg-blue-600 rounded">Save Book</button>
          <Link to="/admin/books" className="px-5 py-3 text-white bg-gray-500 rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
