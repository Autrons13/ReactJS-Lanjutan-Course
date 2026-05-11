import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Cek status login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Bersihkan data [cite: 16]
    navigate("/login");
  };

  return (
    <nav className="flex px-8 py-4 text-white bg-blue-600">
      <div className="flex items-center mx-auto space-x-4 max-w-7xl">
        <Link to="/" className="text-xl font-bold text-white mx-left">
          Booksales
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-700">
            Beranda
          </Link>
          <Link to="/books" className="text-white hover:text-gray-700">
            Buku
          </Link>

          {token ? (
            <>
              {/* Jika user adalah admin, tampilkan link ke Dashboard  */}
              {user?.role === "admin" && (
                <Link to="/admin" className="font-semibold text-white hover:text-gray-700">
                  Dashboard Admin
                </Link>
              )}

              <Link to="/profile" className="text-white hover:text-gray-700">
                Profil
              </Link>
              <button onClick={handleLogout} className="px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
