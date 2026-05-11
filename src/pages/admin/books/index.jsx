import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../_api";

export default function Index() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data.data || []);

      console.log("data dari api:", response.data);
    } catch (err) {
      console.log(err);
      setBooks([]);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus book?");
    if (confirmDelete) {
      try {
        await api.delete(`/books/${id}`);
        getBooks();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    // Tambahkan class text-white di div pembungkus agar semua teks di dalamnya jadi putih secara default
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold">Books</h1>

        <Link to="/admin/books/create" className="px-4 py-2 text-white bg-blue-600 rounded">
          Add Book
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Author</th>
            <th className="p-3 border">Genre</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item, index) => (
            <tr key={item.id}>
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{item.title}</td>
              <td className="p-3 border">{item.author?.name}</td>
              <td className="p-3 border">{item.genre?.name}</td>
              <td className="p-3 space-x-2 border">
                <Link to={`/admin/books/edit/${item.id}`} className="px-3 py-1 text-white bg-yellow-500 rounded">
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
