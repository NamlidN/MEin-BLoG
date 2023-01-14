import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LaningPage";
import "./App.css"
import AdminPage from "./pages/AdminPage";
function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
