import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1 className="text-2xl font-bold mb-5 text-white">Create Author</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Author Name" className="border p-3 w-full rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
