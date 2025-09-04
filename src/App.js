import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import LabPage from "./components/labPage";
import MainPage from "./components/mainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </Router>
  );
}

export default App;
