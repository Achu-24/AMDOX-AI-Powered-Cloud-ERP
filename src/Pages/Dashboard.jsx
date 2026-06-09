import StatCard from "../components/StatCard";
import heroImage from "../assets/hero.png";

function Dashboard() {
  const modules = [
    "Finance",
    "HR & Payroll",
    "Inventory",
    "AI Reports",
  ];

  return (
    <section className="page">
      <div className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">AI-Powered Cloud ERP</span>
          <h2>Smart ERP dashboard for business operations.</h2>
          <p>
            Track employees, revenue, inventory, approvals, and reports from one
            clean cloud-based system.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">View Reports</button>
            <button className="secondary-btn">Explore Modules</button>
          </div>
        </div>

        <img className="hero-bg-image" src={heroImage} alt="ERP visual" />
      </div>

      <div className="stats-grid">
        <StatCard title="Employees" value="120" change="+8 new hires" />
        <StatCard title="Revenue" value="₹5.4L" change="+14% growth" />
        <StatCard title="Inventory" value="450" change="32 low stock" />
        <StatCard title="Approvals" value="18" change="Needs action" />
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>ERP Modules</h3>
            <span>4 active</span>
          </div>

          <div className="mini-modules">
            {modules.map((module) => (
              <div className="mini-module" key={module}>
                <div>{module.charAt(0)}</div>
                <p>{module}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Recent Activity</h3>
            <span>Today</span>
          </div>

          <div className="activity-list compact">
            <div>
              <strong>Employee record updated</strong>
              <p>HR team updated payroll details.</p>
            </div>
            <div>
              <strong>Inventory alert generated</strong>
              <p>Low stock detected for 12 products.</p>
            </div>
            <div>
              <strong>Finance report created</strong>
              <p>Monthly report generated successfully.</p>
            </div>
          </div>
        </div>

        <div className="panel approval-panel">
          <div className="panel-header">
            <h3>Task Progress</h3>
            <span>Weekly</span>
          </div>

          <div className="approval-box">
            <h2>72%</h2>
            <p>Tasks completed this week</p>
            <div className="progress-bar">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;