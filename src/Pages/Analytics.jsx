import React from 'react';
import KPICards from '../components/dashboard/KPICards';
import AIForecast from '../components/dashboard/AIForecast';
import DashboardCharts from '../components/dashboard/DashboardCharts';
import { erpData } from '../data/sampleData';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

/**
 * Analytics.jsx
 * Unified Analytics Page bringing together KPIs, AI forecasts, and charts.
 */
const Analytics = () => {
  const { recentActivity } = erpData;

  const styles = {
    page: { padding: '24px', background: '#f1f5f9', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' },
    header: { marginBottom: '24px' },
    title: { fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 8px 0' },
    subtitle: { fontSize: '1rem', color: '#64748b', margin: 0 },
    activityCard: { background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' },
    activityTitle: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' },
    listItem: { display: 'flex', alignItems: 'flex-start', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' },
    time: { fontSize: '0.75rem', color: '#94a3b8', minWidth: '80px' },
    text: { fontSize: '0.875rem', color: '#334155' }
  };

  const getIcon = (type) => {
    if (type === 'warning') return <AlertTriangle size={16} color="#f59e0b" />;
    if (type === 'success') return <CheckCircle size={16} color="#10b981" />;
    return <Bell size={16} color="#3b82f6" />;
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Analytics Dashboard</h1>
        <p style={styles.subtitle}>Overview of company performance, AI insights, and system activities.</p>
      </div>

      <KPICards />
      
      <AIForecast />
      
      <DashboardCharts />

      <div style={styles.activityCard}>
        <h3 style={styles.activityTitle}> <Bell size={20} /> Recent Activity & Alerts</h3>
        <ul style={styles.list}>
          {recentActivity.map((activity) => (
            <li key={activity.id} style={styles.listItem}>
              <div style={{ marginTop: '2px' }}>{getIcon(activity.type)}</div>
              <div>
                <div style={styles.text}>{activity.text}</div>
                <div style={styles.time}>{activity.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;