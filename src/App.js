import React from "react";
import { ReactDOM } from "react";
import { Routes, Route,BrowserRouter} from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm";
import EmployeeForm from "./components/Employee/EmployeeForm";

import Layout from "./components/Layout/Layout";
import Process from "./components/Manager/Process";
import UserProfile from "./components/Profile/UserProfile";
import StartingPageContent from "./components/StartingPage/StartingPageContent";
import Welcome from "./pages/Welcome";
import Manger from "./pages/Manager";
import BewertungDetails from "./pages/BewertungDetails";
import Assessment from "./components/Manager/AssessmentViewing";
import AssessmentViewing from "./components/Manager/AssessmentViewing";
import Sprint from "./pages/Sprint";
import Project from "./pages/Project";
import DatenSchutz from './pages/DatenSchutz';
export default function App() {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<StartingPageContent/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>;
          <Route path="/profile" element={<UserProfile/>}></Route>
          <Route path="/employee" element={<EmployeeForm/>}></Route>
          <Route path="/manager" element={<Process/>}></Route>
          <Route path="/manager/*" element={<BewertungDetails/>}></Route>
          <Route path="/bewertungdetails" element={<BewertungDetails/>}></Route>
          <Route path="/sprint" element={<Sprint/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>
          <Route path="/datenschutz" element={<DatenSchutz/>}></Route>
          <Route path="/starting" element={<StartingPageContent/>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
     
    </div>
  );
}
