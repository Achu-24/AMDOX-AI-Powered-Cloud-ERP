function Topbar({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <h1>{activePage}</h1>
        <p>Welcome back. Here is your ERP overview.</p>
      </div>

      <div className="profile-box">
        <span>SR</span>
      </div>
    </header>
  );
}

export default Topbar;