import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">Library App</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
