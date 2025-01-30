import "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
