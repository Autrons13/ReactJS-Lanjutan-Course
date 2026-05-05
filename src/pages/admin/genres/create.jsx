import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("genres")) || [];

    const newGenre = {
      id: Date.now(),
      name: name,
    };

    oldData.push(newGenre);

    localStorage.setItem("genres", JSON.stringify(oldData));

    navigate("/admin/genres");
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-white">Create Genre</h1>

      <form onSubmit={handleSubmit} className="space-x-2 space-y-4">
        <input type="text" placeholder="Genre Name" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <button type="submit" className="px-3 py-1 text-white bg-blue-600 rounded">
          Save Genres
        </button>
        <Link to="/admin/genres" className="px-3 py-1 space-x-2 text-white bg-gray-500 rounded">
          Cancel
        </Link>
      </form>
    </div>
  );
}
