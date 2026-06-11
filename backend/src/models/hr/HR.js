const mongoose = require('mongoose')

// Employee
const employeeSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    employeeId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    joinDate: { type: Date, required: true },
    exitDate: { type: Date },
    employmentType: { type: String, enum: ['full_time', 'part_time', 'contract', 'intern'], default: 'full_time' },
    status: { type: String, enum: ['active', 'inactive', 'terminated'], default: 'active' },
    salary: {
      base: { type: Number },
      currency: { type: String, default: 'USD' },
      payFrequency: { type: String, enum: ['monthly', 'biweekly', 'weekly'], default: 'monthly' },
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
    bankDetails: {
      bankName: String,
      accountNumber: String,
      ifscCode: String,
    },
    documents: [{ name: String, url: String, uploadedAt: Date }],
  },
  { timestamps: true }
)
employeeSchema.index({ tenantId: 1, employeeId: 1 }, { unique: true })
employeeSchema.index({ tenantId: 1, email: 1 }, { unique: true })

// Leave 
const leaveSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    type: { type: String, enum: ['annual', 'sick', 'unpaid', 'maternity', 'paternity', 'other'], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalDays: { type: Number, required: true },
    reason: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'rejected', 'cancelled'], default: 'pending' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    approvedAt: { type: Date },
    comments: { type: String },
  },
  { timestamps: true }
)
leaveSchema.index({ tenantId: 1, employeeId: 1, startDate: 1 })

// Attendance 
const attendanceSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    date: { type: Date, required: true },
    checkIn: { type: Date },
    checkOut: { type: Date },
    hoursWorked: { type: Number },
    status: { type: String, enum: ['present', 'absent', 'half_day', 'holiday', 'leave'], default: 'present' },
    notes: { type: String },
  },
  { timestamps: true }
)
attendanceSchema.index({ tenantId: 1, employeeId: 1, date: 1 }, { unique: true })

//  Payroll 
const payrollSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    period: {
      month: { type: Number, required: true },
      year: { type: Number, required: true },
    },
    status: { type: String, enum: ['draft', 'processing', 'completed', 'paid'], default: 'draft' },
    totalEmployees: { type: Number, default: 0 },
    totalGross: { type: Number, default: 0 },
    totalDeductions: { type: Number, default: 0 },
    totalNet: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' },
    processedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    processedAt: { type: Date },
  },
  { timestamps: true }
)
payrollSchema.index({ tenantId: 1, 'period.month': 1, 'period.year': 1 }, { unique: true })

// Payslip 
const payslipSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    payrollId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payroll', required: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    earnings: [{ label: String, amount: Number }],
    deductions: [{ label: String, amount: Number }],
    grossPay: { type: Number, required: true },
    totalDeductions: { type: Number, required: true },
    netPay: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['draft', 'sent', 'paid'], default: 'draft' },
  },
  { timestamps: true }
)
payslipSchema.index({ tenantId: 1, payrollId: 1, employeeId: 1 }, { unique: true })

module.exports = {
  Employee: mongoose.model('Employee', employeeSchema),
  Leave: mongoose.model('Leave', leaveSchema),
  Attendance: mongoose.model('Attendance', attendanceSchema),
  Payroll: mongoose.model('Payroll', payrollSchema),
  Payslip: mongoose.model('Payslip', payslipSchema),
}