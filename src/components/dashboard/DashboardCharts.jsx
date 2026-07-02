import React from 'react';
import { erpData } from '../../data/sampleData';

/**
 * DashboardCharts.jsx
 * Dependency-free SVG charts for visualizing ERP data.
 */
const DashboardCharts = () => {
  const { revenueTrend, departmentBreakdown } = erpData;

  const styles = {
    container: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', marginBottom: '20px' },
    card: { background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' },
    title: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '20px' },
    svgContainer: { width: '100%', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px', paddingBottom: '20px', position: 'relative' },
    barCol: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '5px', height: '100%' },
    bar: { width: '100%', background: '#3b82f6', borderRadius: '4px 4px 0 0', transition: 'height 0.3s ease' },
    label: { fontSize: '0.75rem', color: '#64748b' },
    pieContainer: { display: 'flex', alignItems: 'center', height: '200px', gap: '20px' },
    legend: { display: 'flex', flexDirection: 'column', gap: '10px' },
    legendItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#475569' },
    dot: { width: '12px', height: '12px', borderRadius: '50%' }
  };

  const maxRevenue = Math.max(...revenueTrend.map(d => d.revenue));

  // Pure CSS Pie Chart representation using conic-gradient
  const conicStops = [];
  let currentPercentage = 0;
  departmentBreakdown.forEach(dept => {
    conicStops.push(`${dept.color} ${currentPercentage}% ${currentPercentage + dept.value}%`);
    currentPercentage += dept.value;
  });
  const pieBackground = `conic-gradient(${conicStops.join(', ')})`;

  return (
    <div style={styles.container}>
      
      {/* Bar Chart: Revenue Trend */}
      <div style={styles.card}>
        <h3 style={styles.title}>Revenue Trend (6 Months)</h3>
        <div style={styles.svgContainer}>
          {revenueTrend.map((data, idx) => (
            <div key={idx} style={styles.barCol}>
              <div 
                style={{ ...styles.bar, height: `${(data.revenue / maxRevenue) * 100}%` }} 
                title={`$${data.revenue}`}
              ></div>
              <span style={styles.label}>{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart: Department Breakdown */}
      <div style={styles.card}>
        <h3 style={styles.title}>Department Allocation</h3>
        <div style={styles.pieContainer}>
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: pieBackground, boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)' }}></div>
          <div style={styles.legend}>
            {departmentBreakdown.map((dept, idx) => (
              <div key={idx} style={styles.legendItem}>
                <div style={{ ...styles.dot, background: dept.color }}></div>
                <span>{dept.name} ({dept.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardCharts;