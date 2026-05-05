import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = () => {
    const data = JSON.parse(localStorage.getItem("authors")) || [];

    setAuthors(data);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus?");

    if (confirmDelete) {
      const filtered = authors.filter((item) => item.id !== id);

      localStorage.setItem("authors", JSON.stringify(filtered));

      setAuthors(filtered);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold text-white">Authors</h1>

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
              <td className="p-3 text-white border">{index + 1}</td>

              <td className="p-3 text-white border">{item.name}</td>

              <td className="p-3 space-x-2 border">
                <Link to={`/admin/authors/edit/${item.id}`} className="px-3 py-1 text-white bg-yellow-500 rounded">
                  Edit
                </Link>

                <button onClick={() => handleDelete(item.id)} className="px-3 py-1 text-white bg-red-600 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
