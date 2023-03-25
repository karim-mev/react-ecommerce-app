import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
