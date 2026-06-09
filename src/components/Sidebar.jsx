const menuItems = [
  "Dashboard",
  "Students",
  "Projects",
  "Attendance",
  "Reports",
  "Settings",
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>A</span>
        <h2>Amdox ERP</h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item}
            className={activePage === item ? "menu-item active" : "menu-item"}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;