import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
