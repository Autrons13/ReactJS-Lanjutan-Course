export default function Index() {
  return (
    // Tambahkan class text-white di div pembungkus agar semua teks di dalamnya jadi putih secara default
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-5">Books</h1>

      <table className="w-full border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 p-3">No</th>
            <th className="border border-gray-700 p-3">Title</th>
            <th className="border border-gray-700 p-3">Author</th>
          </tr>
        </thead>

        {/* Pastikan warna background body tabel transparan atau pakai warna gelap */}
        <tbody className="bg-transparent">
          <tr>
            <td className="border border-gray-700 p-3">1</td>
            <td className="border border-gray-700 p-3">React JS</td>
            <td className="border border-gray-700 p-3">John Doe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
