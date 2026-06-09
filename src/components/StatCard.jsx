function StatCard({ title, value, change, icon: Icon, tone }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon size={20} />
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{change}</span>
      </div>
    </div>
  );
}

export default StatCard;