import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../_api";

export default function Create() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/authors", {
        name,
      });

      navigate("/admin/authors");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Create Author</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Author Name" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="flex gap-3">
          <button className="px-5 py-3 text-white bg-blue-600 rounded">Save</button>

          <Link to="/admin/authors" className="px-5 py-3 text-white bg-gray-500 rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
