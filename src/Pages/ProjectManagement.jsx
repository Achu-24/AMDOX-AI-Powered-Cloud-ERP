import { CheckCircle2, Clock3, FolderKanban, UsersRound } from "lucide-react";
import StatCard from "../components/StatCard";

function ProjectManagement() {
  const projects = [
    { name: "ERP Dashboard UI", owner: "Frontend Team", progress: "85%", status: "In Progress" },
    { name: "Authentication API", owner: "Backend Team", progress: "45%", status: "In Progress" },
    { name: "Database Schema", owner: "DB Team", progress: "70%", status: "Review" },
  ];

  return (
    <section className="page">
      <div className="module-hero project-hero">
        <span>Project Management</span>
        <h2>Plan, assign, monitor, and deliver ERP project tasks efficiently.</h2>
        <p>
          Manage development progress, team ownership, deadlines, and project
          completion with a focused project control center.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard title="Projects" value="12" change="4 active" icon={FolderKanban} tone="purple" />
        <StatCard title="Tasks Done" value="72%" change="36/50 tasks" icon={CheckCircle2} tone="cyan" />
        <StatCard title="Team Members" value="05" change="All assigned" icon={UsersRound} tone="green" />
        <StatCard title="Deadlines" value="03" change="Upcoming" icon={Clock3} tone="orange" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>Project Progress</h3>
            <p>Current module development status</p>
          </div>
          <span>Projects</span>
        </div>

        <div className="data-table">
          <div className="table-row table-head">
            <span>Project</span>
            <span>Owner</span>
            <span>Progress</span>
            <span>Status</span>
          </div>

          {projects.map((project) => (
            <div className="table-row" key={project.name}>
              <span>{project.name}</span>
              <span>{project.owner}</span>
              <span>{project.progress}</span>
              <span className="status pending">{project.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectManagement;