import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Perbaikan path: langsung ke folder _api
import api from "../../_api";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/admin");
    } catch (err) {
      // Menangkap pesan error spesifik dari backend (jika ada),
      // kalau tidak ada, pakai pesan default lu.
      setError(err.response?.data?.message || "Email atau password salah");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Login</h1>

        {error && <div className="p-3 mb-4 text-red-600 bg-red-100 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required // Tambahan kecil: biar form gak bisa disubmit kosong
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required // Tambahan kecil
          />

          <button type="submit" className="w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
