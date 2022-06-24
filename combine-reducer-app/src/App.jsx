import "./App.css";
import Navbar from "./components/Navbar";
// import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "../src/pages/Login"
import { AuthProvider } from "./context/AuthContext";

function App() {
  return <div className="App">
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="*" element={<Login />}></Route>
    </Routes>
    </AuthProvider>

  </div>;
}

export default App;
