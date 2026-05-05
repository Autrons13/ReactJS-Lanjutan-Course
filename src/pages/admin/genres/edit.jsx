import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const [name, setName] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const genres = JSON.parse(localStorage.getItem("genres")) || [];

    const genre = genres.find((item) => item.id == id);

    if (genre) {
      setName(genre.name);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const genres = JSON.parse(localStorage.getItem("genres")) || [];

    const updated = genres.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          name,
        };
      }

      return item;
    });

    localStorage.setItem("genres", JSON.stringify(updated));

    navigate("/admin/genres");
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-white">Edit Genre</h1>

      <form onSubmit={handleUpdate} className="space-x-2 space-y-4">
        <input type="text" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <button className="px-3 py-1 text-white bg-blue-600 rounded">Update Genre</button>

        <Link to="/admin/genres" className="px-3 py-1 space-x-2 text-white bg-gray-500 rounded">
          Cancel
        </Link>
      </form>
    </div>
  );
}
