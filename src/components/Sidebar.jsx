import {
  LayoutDashboard,
  BadgeIndianRupee,
  Users,
  Truck,
  FolderKanban,
  FileText,
  Settings,
  Sparkles,
  BarChart3,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Finance", icon: BadgeIndianRupee },
  { name: "HR", icon: Users },
  { name: "Supply Chain", icon: Truck },
  { name: "Project Management", icon: FolderKanban },
  { name: "Reports", icon: FileText },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-mark">
          <Sparkles size={20} />
        </div>
        <div>
         <h2>Amdox Tech</h2>
<p>Cloud ERP</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={activePage === item.name ? "menu-item active" : "menu-item"}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-card">
  <p>Workspace</p>
  <h4>Finance, HR, supply chain and project tools in one ERP system.</h4>
</div>
    </aside>
  );
}

export default Sidebar;