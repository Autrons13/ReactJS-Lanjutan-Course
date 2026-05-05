import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    const data = JSON.parse(localStorage.getItem("genres")) || [];

    setGenres(data);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus genre?");

    if (confirmDelete) {
      const filtered = genres.filter((item) => item.id !== id);

      localStorage.setItem("genres", JSON.stringify(filtered));

      setGenres(filtered);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold text-white">Genres</h1>

        <Link to="/admin/genres/create" className="px-4 py-2 text-white bg-blue-600 rounded">
          Add Genre
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No</th>
            <th className="p-3 border">Genre Name</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {genres.length > 0 ? (
            genres.map((item, index) => (
              <tr key={item.id}>
                <td className="p-3 text-white border ">{index + 1}</td>

                <td className="p-3 text-white border">{item.name}</td>

                <td className="p-3 space-x-2 border">
                  <Link to={`/admin/genres/edit/${item.id}`} className="px-3 py-1 text-white bg-yellow-500 rounded">
                    Edit
                  </Link>

                  <button onClick={() => handleDelete(item.id)} className="px-3 py-1 text-white bg-red-600 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-5 text-center">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
