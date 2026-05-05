import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const [name, setName] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const authors = JSON.parse(localStorage.getItem("authors")) || [];

    const author = authors.find((item) => item.id == id);

    if (author) {
      setName(author.name);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const authors = JSON.parse(localStorage.getItem("authors")) || [];

    const updated = authors.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          name,
        };
      }

      return item;
    });

    localStorage.setItem("authors", JSON.stringify(updated));

    navigate("/admin/authors");
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-white">Edit Author</h1>

      <form onSubmit={handleUpdate} className="space-x-2 space-y-4">
        <input type="text" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <button type="submit" className="px-3 py-1 text-white bg-blue-600 rounded">
          Save Genre
        </button>

        <Link to="/admin/authors" className="px-3 py-1 text-white bg-gray-500 rounded">
          Cancel
        </Link>
      </form>
    </div>
  );
}
