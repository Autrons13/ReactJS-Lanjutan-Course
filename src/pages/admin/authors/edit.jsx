import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../_api";

export default function Edit() {
  const [name, setName] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getAuthor();
  }, []);

  const getAuthor = async () => {
    try {
      const response = await api.get(`/authors/${id}`);
      setName(response.data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/authors/${id}`, {
        name,
      });
      navigate("/admin/authors");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold"> Edit Author</h1>

      <form onSubmit={handleUpdate} className="space-y-4" v>
        <input type="text" className="w-full p-3 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

        <div className="flex gap-3">
          <button className="px-5 py-3 text-white bg-blue-600 rounded">Update Author</button>

          <Link to="/admin/authors" className="px-5 py-3 text-white bg-gray-500 rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
