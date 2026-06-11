const mongoose = require('mongoose')

//  Project 
const projectSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    projectCode: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['planning', 'active', 'on_hold', 'completed', 'cancelled'], default: 'planning' },
    priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    tags: [String],
    clientName: { type: String },
  },
  { timestamps: true }
)
projectSchema.index({ tenantId: 1, projectCode: 1 }, { unique: true })

// Task
const taskSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    title: { type: String, required: true },
    description: { type: String },
    assigneeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    parentTaskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    startDate: { type: Date },
    dueDate: { type: Date },
    completedAt: { type: Date },
    status: { type: String, enum: ['todo', 'in_progress', 'review', 'done', 'cancelled'], default: 'todo' },
    priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
    estimatedHours: { type: Number },
    loggedHours: { type: Number, default: 0 },
  },
  { timestamps: true }
)
taskSchema.index({ tenantId: 1, projectId: 1 })

// Resource 
const resourceSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    role: { type: String },
    allocationPercent: { type: Number, min: 0, max: 100, default: 100 },
    startDate: { type: Date },
    endDate: { type: Date },
    hourlyRate: { type: Number },
    currency: { type: String, default: 'USD' },
  },
  { timestamps: true }
)
resourceSchema.index({ tenantId: 1, projectId: 1, employeeId: 1 }, { unique: true })

// Budget
const budgetSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true, unique: true },
    totalBudget: { type: Number, required: true },
    spent: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' },
    breakdown: [{ category: String, allocated: Number, spent: Number }],
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

module.exports = {
  Project: mongoose.model('Project', projectSchema),
  Task: mongoose.model('Task', taskSchema),
  Resource: mongoose.model('Resource', resourceSchema),
  Budget: mongoose.model('Budget', budgetSchema),
}