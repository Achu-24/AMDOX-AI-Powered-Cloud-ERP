import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import HR from "./pages/HR";
import SupplyChain from "./pages/SupplyChain";
import ProjectManagement from "./pages/ProjectManagement";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  const renderPage = () => {
    if (activePage === "Dashboard") {
      return <Dashboard setActivePage={setActivePage} />;
    }

    if (activePage === "Finance") return <Finance />;
    if (activePage === "HR") return <HR />;
    if (activePage === "Supply Chain") return <SupplyChain />;
    if (activePage === "Project Management") return <ProjectManagement />;
    if (activePage === "Reports") return <Reports />;
    if (activePage === "Settings") return <Settings />;

    return <Dashboard setActivePage={setActivePage} />;
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