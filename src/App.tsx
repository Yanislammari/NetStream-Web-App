import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Accounts from "./pages/Accounts/Accounts";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import MediaDetails from "./pages/MediaDetails/MediaDetails";
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
        <Route path="/home" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/media/:mediaId" element={<MediaDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
