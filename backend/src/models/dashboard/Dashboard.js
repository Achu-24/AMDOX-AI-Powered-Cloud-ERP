const mongoose = require('mongoose')

// Dashboard 
const dashboardSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    layout: [
      {
        widgetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Widget' },
        x: Number,
        y: Number,
        w: Number,
        h: Number,
      },
    ],
  },
  { timestamps: true }
)
dashboardSchema.index({ tenantId: 1, userId: 1 })

// Widget 
const widgetSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['chart', 'metric', 'table', 'list', 'custom'], required: true },
    chartType: { type: String, enum: ['line', 'bar', 'pie', 'area', 'heatmap'] },
    dataSource: { type: String, required: true },
    config: { type: mongoose.Schema.Types.Mixed },
    refreshInterval: { type: Number, default: 300 },
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
)

//Report
const reportSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    name: { type: String, required: true },
    module: { type: String, enum: ['finance', 'hr', 'supplyChain', 'projects'], required: true },
    filters: { type: mongoose.Schema.Types.Mixed },
    columns: [String],
    schedule: {
      enabled: { type: Boolean, default: false },
      frequency: { type: String, enum: ['daily', 'weekly', 'monthly'] },
      recipients: [String],
      nextRunAt: { type: Date },
    },
    lastGeneratedAt: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

module.exports = {
  Dashboard: mongoose.model('Dashboard', dashboardSchema),
  Widget: mongoose.model('Widget', widgetSchema),
  Report: mongoose.model('Report', reportSchema),
}