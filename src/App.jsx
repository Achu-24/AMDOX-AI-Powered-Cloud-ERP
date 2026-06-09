function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Amdox ERP Dashboard</h1>
      <p>AI-Powered Cloud ERP Suite Frontend</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Employees</h3>
          <h2>120</h2>
        </div>

        <div style={cardStyle}>
          <h3>Monthly Revenue</h3>
          <h2>₹5,40,000</h2>
        </div>

        <div style={cardStyle}>
          <h3>Inventory Items</h3>
          <h2>450</h2>
        </div>

        <div style={cardStyle}>
          <h3>Pending Approvals</h3>
          <h2>18</h2>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>ERP Modules</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        <div style={moduleStyle}>Finance Management</div>
        <div style={moduleStyle}>HR & Payroll</div>
        <div style={moduleStyle}>Supply Chain</div>
        <div style={moduleStyle}>Project Management</div>
        <div style={moduleStyle}>Reports</div>
        <div style={moduleStyle}>AI Forecasting</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
};

const moduleStyle = {
  background: "#111827",
  color: "white",
  padding: "30px",
  borderRadius: "10px",
  fontSize: "18px",
};

export default App;
