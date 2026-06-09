import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <section className="page">
      <div className="stats-grid">
        <StatCard title="Total Students" value="1,248" change="+12% this month" />
        <StatCard title="Active Projects" value="32" change="+5 new projects" />
        <StatCard title="Attendance Rate" value="91%" change="+3% improvement" />
        <StatCard title="Pending Reports" value="08" change="Needs review" />
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <h3>Recent Activity</h3>
          <ul>
            <li>New student registration completed</li>
            <li>Project module updated</li>
            <li>Attendance report generated</li>
            <li>Admin settings reviewed</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Quick Overview</h3>
          <p>
            This ERP dashboard gives admins a quick view of students, projects,
            attendance, reports, and system activity in one clean interface.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;