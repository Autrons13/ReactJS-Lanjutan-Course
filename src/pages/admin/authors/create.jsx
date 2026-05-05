import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("authors")) || [];

    const newAuthor = {
      id: Date.now(),
      name: name,
    };

    oldData.push(newAuthor);

    localStorage.setItem("authors", JSON.stringify(oldData));

    navigate("/admin/authors");
  };

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold text-white">Create Author</h1>

      <form onSubmit={handleSubmit} className="space-x-2 space-y-4">
        <input type="text" placeholder="Author Name" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <button className="px-3 py-1 text-white bg-blue-600 rounded">Update Author</button>

        <Link to="/admin/authors" className="px-3 py-1 text-white bg-gray-500 rounded">
          Cancel
        </Link>
      </form>
    </div>
  );
}
