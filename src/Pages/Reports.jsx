import React from 'react';
import { erpData } from '../data/sampleData';
import { Download, Printer } from 'lucide-react';

/**
 * Reports.jsx
 * Exportable data tables using pure JavaScript. No external packages.
 */
const Reports = () => {
  const { reports } = erpData;

  const handleExportCSV = () => {
    if (!reports || reports.length === 0) return;
    const headers = Object.keys(reports[0]).join(',');
    const rows = reports.map(row => Object.values(row).map(val => `"${val}"`).join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'erp_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const styles = {
    page: { padding: '24px', background: '#f1f5f9', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' },
    title: { fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', margin: '0' },
    description: { color: '#64748b', margin: '8px 0 0 0', fontSize: '1rem' },
    buttonGroup: { display: 'flex', gap: '10px' },
    btn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500', transition: 'background 0.2s' },
    btnPrimary: { background: '#2563eb', color: '#fff' },
    btnSecondary: { background: '#fff', color: '#475569', border: '1px solid #cbd5e1' },
    tableContainer: { background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', overflowX: 'auto' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
    th: { padding: '12px 16px', borderBottom: '2px solid #e2e8f0', color: '#475569', fontWeight: '600', fontSize: '0.875rem' },
    td: { padding: '12px 16px', borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.875rem' },
    badge: { padding: '4px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' }
  };

  return (
    <section className="page" style={styles.page}>
      <div className="panel" style={styles.header}>
        <div>
          <h3 style={styles.title}>Reports</h3>
          <p style={styles.description}>Generate and review ERP reports for students, attendance, and projects.</p>
        </div>
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={handlePrint}>
            <Printer size={16} /> Print
          </button>
          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={handleExportCSV}>
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Employee ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Performance</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((row, idx) => (
              <tr key={idx}>
                <td style={styles.td}>{row.id}</td>
                <td style={styles.td}>{row.name}</td>
                <td style={styles.td}>{row.department}</td>
                <td style={styles.td}>
                  <span style={{ 
                    ...styles.badge, 
                    background: row.status === 'Active' ? '#dcfce7' : '#fef3c7',
                    color: row.status === 'Active' ? '#16a34a' : '#d97706'
                  }}>
                    {row.status}
                  </span>
                </td>
                <td style={styles.td}>{row.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Reports;