import { Bell, Search } from "lucide-react";

function Topbar({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <p className="breadcrumb">Workspace / {activePage}</p>
        <h1>{activePage}</h1>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <Search size={17} />
          <input type="text" placeholder="Search anything..." />
        </div>

        <button className="icon-btn">
          <Bell size={18} />
        </button>

        <div className="profile-box">
          <span>A</span>
          <div>
            <strong>Admin</strong>
<p>Frontend Lead</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;