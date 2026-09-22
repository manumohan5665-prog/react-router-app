import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {

  return (
    <BrowserRouter>

    <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetail />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;