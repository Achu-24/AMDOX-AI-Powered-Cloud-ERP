import { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

localStorage.setItem("token", response.data.data.token);      setIsLoggedIn(true);

      alert("Login Successful!");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
      </div>

      <section className="login-showcase">
        <div className="login-brand">
          <div className="login-logo-mark">
            <Sparkles size={22} />
          </div>

          <div>
            <h2>Amdox Cloud ERP</h2>
            <p>Business operations management suite</p>
          </div>
        </div>

        <div className="showcase-content">
          <span className="showcase-pill">
            <Zap size={14} />
            Smart ERP Dashboard
          </span>

          <h1>
            Run finance, HR, supply chain, and projects from one command
            center.
          </h1>

          <p>
            A modern ERP workspace built for real-time insights, organized
            reporting, and faster operational decision-making.
          </p>

          <div className="feature-list">
            <div>
              <BadgeCheck size={18} />
              <span>Live KPI monitoring</span>
            </div>

            <div>
              <BadgeCheck size={18} />
              <span>Finance and HR modules</span>
            </div>

            <div>
              <BadgeCheck size={18} />
              <span>Reports and analytics dashboard</span>
            </div>
          </div>
        </div>

        <div className="showcase-stats">
          <div>
            <h3>94%</h3>
            <p>System Health</p>
          </div>

          <div>
            <h3>₹5.4L</h3>
            <p>Revenue Tracked</p>
          </div>

          <div>
            <h3>120</h3>
            <p>Employees</p>
          </div>
        </div>
      </section>

      <section className="login-panel-wrap">
        <div className="login-card premium-login-card">
          <div className="login-card-header">
            <div className="secure-icon">
              <ShieldCheck size={22} />
            </div>

            <span className="login-pill">Secure Access</span>
          </div>

          <h2>Welcome back</h2>

          <p className="login-subtitle">
            Sign in to continue to your Amdox ERP workspace.
          </p>

          <div className="demo-box">
            <BarChart3 size={18} />
            <div>
              <strong>Secure Login</strong>
              <p>Login using your registered email and password.</p>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email Address</label>

            <div className="input-box">
              <Mail size={18} />

              <input
                type="email"
                placeholder="admin@amdox.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-row">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="button">Forgot password?</button>
            </div>

            <button className="login-btn" type="submit">
              Login to Dashboard
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="login-footer-text">
            Protected by enterprise-grade access control.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;