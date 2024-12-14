import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Accounts from "./pages/Accounts/Accounts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-left" theme="dark" richColors />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
