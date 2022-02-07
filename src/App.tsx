import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainInfoForm from "./mainInfo/mainInfoForm.tsx";
import EducationForm from "./educationForm/EducationForm.tsx";
import QualitiesForm from "./qualities/QualitiesForm.tsx";
import WorkForm from "./WorkForm.tsx";
import Menu from "./menu.tsx";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<MainInfoForm />} />
        <Route path="/education" element={<EducationForm />} />
        <Route path="/work" element={<WorkForm />} />
        <Route path="/qualities" element={<QualitiesForm />} />
      </Routes>
    </Router>
  );
}

export default App;
