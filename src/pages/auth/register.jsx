import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../_api";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  // state error
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // hapus error saat user ngetik
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // validasi frontend
    if (!formData.name) {
      newErrors.name = "Name must be filled";
    }

    if (!formData.email) {
      newErrors.email = "Email must be filled";
    }

    if (!formData.password) {
      newErrors.password = "Password must be filled";
    }

    // kalau ada error jangan submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/register", formData);

      console.log(response.data);

      setSuccess("Register berhasil!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log("ERROR:", err);

      if (err.response) {
        console.log("DATA:", err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Register</h1>

        {/* pesan sukses */}
        {success && <div className="p-3 mb-4 text-green-700 bg-green-100 border border-green-400 rounded-lg">{success}</div>}

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="mb-4">
            <input type="text" name="name" placeholder="Fullname" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" />

            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" />

            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg" />

            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full py-3 text-white bg-blue-600 rounded-lg">
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="mt-5 text-center">
          Already have an account?
          <Link to="/login" className="ml-2 text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
