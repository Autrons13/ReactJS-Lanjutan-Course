import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("genres")) || [];

    setGenres(data);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-white">Genres</h1>

        <Link to="/admin/genres/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Genre
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">No</th>
            <th className="border p-3">Genre Name</th>
          </tr>
        </thead>

        <tbody>
          {genres.length > 0 ? (
            genres.map((item, index) => (
              <tr key={item.id}>
                <td className="border p-3 text-white">{index + 1}</td>

                <td className="border p-3 text-white">{item.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center p-5">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
