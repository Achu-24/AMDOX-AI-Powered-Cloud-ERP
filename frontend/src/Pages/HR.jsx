import { useEffect, useState } from "react";
import axios from "axios";
import {
  BriefcaseBusiness,
  CalendarCheck,
  UserPlus,
  Users,
} from "lucide-react";
import StatCard from "../components/StatCard";

function HR() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/employees",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployees(res.data.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  return (
    <section className="page">
      <div className="module-hero hr-hero">
        <span>HR & Payroll</span>
        <h2>Manage employees, attendance, payroll, and team performance.</h2>
        <p>
          Keep employee records organized with attendance insights, role data,
          and payroll-ready HR summaries.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Employees"
          value={employees.length}
          change="+8 this month"
          icon={Users}
          tone="purple"
        />
        <StatCard
          title="Attendance"
          value="91%"
          change="+3% improved"
          icon={CalendarCheck}
          tone="cyan"
        />
        <StatCard
          title="New Hires"
          value="08"
          change="This month"
          icon={UserPlus}
          tone="green"
        />
        <StatCard
          title="Open Roles"
          value="05"
          change="Hiring active"
          icon={BriefcaseBusiness}
          tone="orange"
        />
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>Employee Overview</h3>
            <p>Team records and attendance snapshot</p>
          </div>
          <span>HR</span>
        </div>

        <div className="data-table">
          <div className="table-row table-head">
            <span>Name</span>
            <span>Role</span>
            <span>Attendance</span>
            <span>Status</span>
          </div>

          {employees.map((employee) => (
            <div className="table-row" key={employee._id}>
              <span>{employee.name}</span>
              <span>{employee.role}</span>
              <span>{employee.attendance}</span>
              <span
                className={
                  employee.status === "Active"
                    ? "status paid"
                    : "status pending"
                }
              >
                {employee.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HR;