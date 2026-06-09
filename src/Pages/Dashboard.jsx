import { useRef } from "react";
import {
  Users,
  IndianRupee,
  Package,
  Clock3,
  ArrowUpRight,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Activity,
} from "lucide-react";
import StatCard from "../components/StatCard";

function Dashboard({ setActivePage }) {
  const modulesRef = useRef(null);

  const goToReports = () => {
    setActivePage("Reports");
  };

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const modules = [
    { title: "Finance", value: "₹5.4L", label: "Monthly revenue", tone: "purple" },
    { title: "HR", value: "120", label: "Active employees", tone: "cyan" },
    { title: "Inventory", value: "450", label: "Items in stock", tone: "green" },
    { title: "Reports", value: "28", label: "Generated reports", tone: "orange" },
  ];

  const activities = [
    {
      title: "Payroll report generated",
      desc: "Finance team created monthly payroll summary.",
      type: "success",
    },
    {
      title: "Low stock alert",
      desc: "Inventory module detected 32 low-stock items.",
      type: "warning",
    },
    {
      title: "New employee added",
      desc: "HR added a new frontend intern profile.",
      type: "success",
    },
  ];

  return (
    <section className="page">
      <div className="dashboard-hero">
        <div className="hero-left">
          <span className="hero-pill">AI-Powered ERP Suite</span>

          <h2>Operate your entire business from one intelligent dashboard.</h2>

          <p>
            Monitor revenue, teams, attendance, inventory, approvals, and
            reports through a clean cloud ERP experience.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-btn" onClick={goToReports}>
              View Analytics <ArrowUpRight size={16} />
            </button>

            <button type="button" className="secondary-btn" onClick={scrollToModules}>
              Explore Modules
            </button>
          </div>
        </div>

        <div className="hero-glass-card">
          <div className="glass-header">
            <p>System Health</p>
            <MoreHorizontal size={18} />
          </div>

          <div className="health-score">
            <h3>94%</h3>
            <span>Stable</span>
          </div>

          <div className="mini-bars">
            <div style={{ height: "42%" }}></div>
            <div style={{ height: "70%" }}></div>
            <div style={{ height: "55%" }}></div>
            <div style={{ height: "88%" }}></div>
            <div style={{ height: "64%" }}></div>
            <div style={{ height: "92%" }}></div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Employees"
          value="120"
          change="+8 this month"
          icon={Users}
          tone="purple"
        />
        <StatCard
          title="Revenue"
          value="₹5.4L"
          change="+14% growth"
          icon={IndianRupee}
          tone="cyan"
        />
        <StatCard
          title="Inventory"
          value="450"
          change="32 low stock"
          icon={Package}
          tone="green"
        />
        <StatCard
          title="Approvals"
          value="18"
          change="Needs action"
          icon={Clock3}
          tone="orange"
        />
      </div>

      <div className="main-dashboard-grid">
        <div className="panel revenue-panel">
          <div className="panel-header">
            <div>
              <h3>Revenue Overview</h3>
              <p>Monthly performance snapshot</p>
            </div>
            <span>2026</span>
          </div>

          <div className="chart-placeholder">
            <div className="chart-line"></div>
            <div className="chart-bars">
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "60%" }}></span>
              <span style={{ height: "38%" }}></span>
              <span style={{ height: "75%" }}></span>
              <span style={{ height: "68%" }}></span>
              <span style={{ height: "88%" }}></span>
              <span style={{ height: "72%" }}></span>
            </div>
          </div>
        </div>

        <div className="panel modules-panel" ref={modulesRef}>
          <div className="panel-header">
            <div>
              <h3>Core Modules</h3>
              <p>Active ERP areas</p>
            </div>
            <span>4 active</span>
          </div>

          <div className="module-list">
            {modules.map((module) => (
              <div className="module-row" key={module.title}>
                <div className={`module-dot ${module.tone}`}></div>
                <div>
                  <h4>{module.title}</h4>
                  <p>{module.label}</p>
                </div>
                <strong>{module.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel activity-panel">
          <div className="panel-header">
            <div>
              <h3>Recent Activity</h3>
              <p>Latest system updates</p>
            </div>
            <span>Today</span>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <div className="activity-item" key={activity.title}>
                {activity.type === "success" ? (
                  <CheckCircle2 className="success-icon" size={18} />
                ) : (
                  <AlertCircle className="warning-icon" size={18} />
                )}
                <div>
                  <strong>{activity.title}</strong>
                  <p>{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel progress-panel">
          <div className="panel-header">
            <div>
              <h3>Task Progress</h3>
              <p>Weekly completion</p>
            </div>
            <Activity size={18} />
          </div>

          <div className="progress-value">
            <h2>72%</h2>
            <p>Completed this week</p>
          </div>

          <div className="progress-bar">
            <div></div>
          </div>

          <div className="progress-meta">
            <span>Completed</span>
            <strong>36/50 tasks</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;