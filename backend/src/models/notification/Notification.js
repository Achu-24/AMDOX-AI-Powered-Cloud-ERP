const mongoose = require('mongoose')

// Notification 
const notificationSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['info', 'success', 'warning', 'error'], default: 'info' },
    module: { type: String, enum: ['finance', 'hr', 'supplyChain', 'projects', 'system'] },
    referenceId: { type: mongoose.Schema.Types.ObjectId },
    referenceModel: { type: String },
    isRead: { type: Boolean, default: false },
    readAt: { type: Date },
  },
  { timestamps: true }
)
notificationSchema.index({ tenantId: 1, userId: 1, isRead: 1 })

// Event
const eventSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    name: { type: String, required: true },
    module: { type: String, required: true },
    payload: { type: mongoose.Schema.Types.Mixed },
    triggeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'processed', 'failed'], default: 'pending' },
    processedAt: { type: Date },
    error: { type: String },
  },
  { timestamps: true }
)

// Webhook 
const webhookSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    events: [String],
    secret: { type: String },
    isActive: { type: Boolean, default: true },
    lastTriggeredAt: { type: Date },
    failureCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

module.exports = {
  Notification: mongoose.model('Notification', notificationSchema),
  Event: mongoose.model('Event', eventSchema),
  Webhook: mongoose.model('Webhook', webhookSchema),
}