import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Projects from "./pages/Projects";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    if (activePage === "Dashboard") return <Dashboard />;
    if (activePage === "Students") return <Students />;
    if (activePage === "Projects") return <Projects />;
    if (activePage === "Attendance") return <Attendance />;
    if (activePage === "Reports") return <Reports />;
    if (activePage === "Settings") return <Settings />;
    return <Dashboard />;
  };

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        <Topbar activePage={activePage} />
        {renderPage()}
      </main>
    </div>
  );
}

export default App;