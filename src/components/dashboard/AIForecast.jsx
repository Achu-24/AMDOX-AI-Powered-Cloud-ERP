import React from 'react';
import { TrendingUp, TrendingDown, Zap, Activity } from 'lucide-react';
import { erpData } from '../../data/sampleData';

/**
 * AIForecast.jsx
 * Displays AI-driven predictions using lightweight client-side logic.
 */
const AIForecast = () => {
  const { forecasts } = erpData;

  const styles = {
    container: { background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', marginBottom: '20px' },
    header: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' },
    title: { fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: 0 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
    card: { background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', transition: 'transform 0.2s ease', cursor: 'default' },
    metric: { fontSize: '0.875rem', color: '#64748b', fontWeight: '500', marginBottom: '8px' },
    values: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
    current: { fontSize: '1.125rem', fontWeight: '700', color: '#334155' },
    predicted: { fontSize: '1.125rem', fontWeight: '700' },
    footer: { display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' },
    badge: { display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 6px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Zap size={24} color="#2563eb" />
        <h2 style={styles.title}>AI Forecast & Predictions</h2>
      </div>
      <div style={styles.grid}>
        {forecasts.map((item, index) => {
          const isUp = item.trend === 'up';
          const trendColor = isUp ? '#16a34a' : '#dc2626';
          const Icon = isUp ? TrendingUp : TrendingDown;

          return (
            <div key={index} style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={styles.metric}>{item.metric}</div>
              <div style={styles.values}>
                <span style={styles.current}>{item.current}</span>
                <span style={{ ...styles.predicted, color: trendColor }}>
                  {item.predicted}
                </span>
              </div>
              <div style={styles.footer}>
                <span>Confidence: {item.confidence}%</span>
                <span style={{ ...styles.badge, background: isUp ? '#dcfce7' : '#fee2e2', color: trendColor }}>
                  <Icon size={12} /> {isUp ? 'Growth' : 'Decline'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIForecast;