import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import LabPage from "./components/labPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </Router>
  );
}

export default App;
