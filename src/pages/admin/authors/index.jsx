import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../_api";

export default function Index() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    try {
      const response = await api.get("/authors");
      setAuthors(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus?");
    if (confirmDelete) {
      try {
        await api.delete(`/authors/${id}`);
        getAuthors();
      } catch (err) {
        console.log(err);
      }
      4;
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold">Authors</h1>

        <Link to="/admin/authors/create" className="px-4 py-2 text-white bg-blue-600 rounded">
          Add Author
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {authors.map((item, index) => (
            <tr key={item.id}>
              <td className="p-3 border">{index + 1}</td>

              <td className="p-3 border">
                {item.name}
                <td className="p-3 space-x-2 border">
                  <link to={`/admin/authors/edit/${item.id}`} className="px-3 py-1 text-white bg-yellow-500 rounded">
                    Edit
                  </link>

                  <button onClick={() => handleDelete(item.id)} className="px-3 py-1 text-white bg-red-600 rounded" onClick={() => handleDelete(item.id)} className="px-3 py-1 text-white bg-red-600 rounded"></button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
