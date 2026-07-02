import React from 'react';
import { Users, DollarSign, ShoppingCart, Briefcase, Truck, Package, Clock, Percent } from 'lucide-react';
import { erpData } from '../../data/sampleData';

/**
 * KPICards.jsx
 * Displays top-level key performance indicators.
 */
const KPICards = () => {
  const { kpis } = erpData;

  const cardsData = [
    { title: 'Total Employees', value: kpis.totalEmployees, icon: Users, color: '#3b82f6' },
    { title: 'Total Revenue', value: '₹5.4L', icon: DollarSign, color: '#10b981' },
    { title: 'Pending Orders', value: kpis.pendingOrders, icon: ShoppingCart, color: '#f59e0b' },
    { title: 'Completed Projects', value: kpis.completedProjects, icon: Briefcase, color: '#8b5cf6' },
    { title: 'Active Vendors', value: kpis.activeVendors, icon: Truck, color: '#6366f1' },
    { title: 'Inventory', value: '450 Items', icon: Package, color: '#ec4899' },
    { title: 'Attendance %', value: `${kpis.attendancePercent}%`, icon: Clock, color: '#14b8a6' },
    { title: 'Profit Margin', value: `${kpis.profitMargin}%`, icon: Percent, color: '#f43f5e' }
  ];

  const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' },
    card: { background: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', transition: 'all 0.2s ease', cursor: 'pointer' },
    iconWrapper: { padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    info: { display: 'flex', flexDirection: 'column' },
    title: { fontSize: '0.875rem', color: '#64748b', fontWeight: '500', marginBottom: '4px' },
    value: { fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', margin: 0 }
  };

  return (
    <div style={styles.grid}>
      {cardsData.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div 
            key={idx} 
            style={styles.card}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'; }}
          >
            <div style={{ ...styles.iconWrapper, background: `${card.color}15`, color: card.color }}>
              <Icon size={24} />
            </div>
            <div style={styles.info}>
              <span style={styles.title}>{card.title}</span>
              <h3 style={styles.value}>{card.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;