import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Finance from "./Pages/Finance";
import HR from "./Pages/HR";
import SupplyChain from "./Pages/SupplyChain";
import ProjectManagement from "./Pages/ProjectManagement";
import Reports from "./Pages/Reports";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";

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
    if (activePage === "Analytics") return <Analytics />;
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