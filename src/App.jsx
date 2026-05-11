import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

// layouts
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// public pages
import Home from "./pages/public/Index";
import PublicBooks from "./pages/public/books/Index";
import ShowBook from "./pages/public/books/Show";

// auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// admin pages
import AdminDashboard from "./pages/admin/Index";

// books
import BooksIndex from "./pages/admin/books/Index";
import BooksCreate from "./pages/admin/books/Create";

// genres
import GenresIndex from "./pages/admin/genres/Index";
import GenresCreate from "./pages/admin/genres/Create";
import GenresEdit from "./pages/admin/genres/Edit";

// authors
import AuthorsIndex from "./pages/admin/authors/Index";
import AuthorsCreate from "./pages/admin/authors/Create";
import AuthorsEdit from "./pages/admin/authors/Edit";

// transactions
import TransactionsIndex from "./pages/admin/transactions/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<PublicBooks />} />
          <Route path="books/:id" element={<ShowBook />} />
        </Route>

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />

          {/* books */}
          <Route path="books" element={<BooksIndex />} />
          <Route path="books/create" element={<BooksCreate />} />

          {/* genres */}
          <Route path="genres" element={<GenresIndex />} />
          <Route path="genres/create" element={<GenresCreate />} />
          <Route path="genres/edit/:id" element={<GenresEdit />} />

          {/* authors */}
          <Route path="authors" element={<AuthorsIndex />} />
          <Route path="authors/create" element={<AuthorsCreate />} />
          <Route path="authors/edit/:id" element={<AuthorsEdit />} />

          {/* transactions */}
          <Route path="transactions" element={<TransactionsIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
