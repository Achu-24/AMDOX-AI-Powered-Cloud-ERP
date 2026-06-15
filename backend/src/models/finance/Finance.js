/* eslint-disable no-undef */
const mongoose = require('mongoose')

//Chart of Accounts 
const chartOfAccountsSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['asset', 'liability', 'equity', 'revenue', 'expense'], required: true },
    subType: { type: String },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChartOfAccounts' },
    currency: { type: String, default: 'USD' },
    balance: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    description: { type: String },
  },
  { timestamps: true }
)
chartOfAccountsSchema.index({ tenantId: 1, code: 1 }, { unique: true })

// Journal Entry
const journalLineSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChartOfAccounts', required: true },
  description: { type: String },
  debit: { type: Number, default: 0 },
  credit: { type: Number, default: 0 },
})

const journalEntrySchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    entryNumber: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    reference: { type: String },
    lines: [journalLineSchema],
    status: { type: String, enum: ['draft', 'posted', 'void'], default: 'draft' },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    postedAt: { type: Date },
    currency: { type: String, default: 'USD' },
    exchangeRate: { type: Number, default: 1 },
  },
  { timestamps: true }
)
journalEntrySchema.index({ tenantId: 1, entryNumber: 1 }, { unique: true })

//Invoice
const invoiceLineSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  taxRate: { type: Number, default: 0 },
  total: { type: Number, required: true },
})

const invoiceSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    invoiceNumber: { type: String, required: true },
    type: { type: String, enum: ['AP', 'AR'], required: true },
    vendorOrCustomerId: { type: mongoose.Schema.Types.ObjectId, refPath: 'type' },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    lines: [invoiceLineSchema],
    subtotal: { type: Number, required: true },
    taxTotal: { type: Number, default: 0 },
    total: { type: Number, required: true },
    amountPaid: { type: Number, default: 0 },
    amountDue: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['draft', 'sent', 'partial', 'paid', 'overdue', 'void'], default: 'draft' },
    notes: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)
invoiceSchema.index({ tenantId: 1, invoiceNumber: 1 }, { unique: true })
invoiceSchema.index({ tenantId: 1, status: 1 })

//Payment 
const paymentSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    method: { type: String, enum: ['bank_transfer', 'credit_card', 'check', 'cash', 'other'], required: true },
    reference: { type: String },
    date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed', 'reversed'], default: 'pending' },
    processedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notes: { type: String },
  },
  { timestamps: true }
)

// Currency
const currencySchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    exchangeRate: { type: Number, required: true },
    baseCurrency: { type: String, default: 'USD' },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

module.exports = {
  ChartOfAccounts: mongoose.model('ChartOfAccounts', chartOfAccountsSchema),
  JournalEntry: mongoose.model('JournalEntry', journalEntrySchema),
  Invoice: mongoose.model('Invoice', invoiceSchema),
  Payment: mongoose.model('Payment', paymentSchema),
  Currency: mongoose.model('Currency', currencySchema),
}