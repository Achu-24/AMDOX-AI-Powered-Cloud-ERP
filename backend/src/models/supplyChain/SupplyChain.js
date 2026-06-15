/* eslint-disable no-undef */
const mongoose = require('mongoose')

//  Vendor 
const vendorSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    vendorCode: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    category: { type: String },
    status: { type: String, enum: ['active', 'inactive', 'blacklisted'], default: 'active' },
    paymentTerms: { type: String, default: 'Net 30' },
    currency: { type: String, default: 'USD' },
    taxId: { type: String },
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
      routingNumber: String,
    },
    rating: { type: Number, min: 1, max: 5 },
    notes: { type: String },
  },
  { timestamps: true }
)
vendorSchema.index({ tenantId: 1, vendorCode: 1 }, { unique: true })

//  Purchase Order
const poLineSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemCode: { type: String },
  description: { type: String },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  taxRate: { type: Number, default: 0 },
  total: { type: Number, required: true },
  receivedQty: { type: Number, default: 0 },
})

const purchaseOrderSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    poNumber: { type: String, required: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    orderDate: { type: Date, required: true },
    expectedDelivery: { type: Date },
    lines: [poLineSchema],
    subtotal: { type: Number, required: true },
    taxTotal: { type: Number, default: 0 },
    total: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['draft', 'sent', 'acknowledged', 'partial', 'received', 'cancelled'], default: 'draft' },
    notes: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedAt: { type: Date },
  },
  { timestamps: true }
)
purchaseOrderSchema.index({ tenantId: 1, poNumber: 1 }, { unique: true })

//  Goods Receipt
const goodsReceiptSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    grNumber: { type: String, required: true },
    poId: { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrder', required: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    receivedDate: { type: Date, required: true },
    items: [
      {
        poLineRef: { type: mongoose.Schema.Types.ObjectId },
        itemName: { type: String, required: true },
        expectedQty: { type: Number },
        receivedQty: { type: Number, required: true },
        condition: { type: String, enum: ['good', 'damaged', 'partial'], default: 'good' },
      },
    ],
    status: { type: String, enum: ['pending', 'completed', 'returned'], default: 'pending' },
    receivedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notes: { type: String },
  },
  { timestamps: true }
)
goodsReceiptSchema.index({ tenantId: 1, grNumber: 1 }, { unique: true })

//  Inventory 
const inventorySchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    itemCode: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    unit: { type: String, default: 'pcs' },
    currentStock: { type: Number, default: 0 },
    reservedStock: { type: Number, default: 0 },
    reorderPoint: { type: Number, default: 0 },
    reorderQty: { type: Number, default: 0 },
    costPrice: { type: Number },
    sellingPrice: { type: Number },
    currency: { type: String, default: 'USD' },
    location: { type: String },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
    isActive: { type: Boolean, default: true },
    lastRestockedAt: { type: Date },
  },
  { timestamps: true }
)
inventorySchema.index({ tenantId: 1, itemCode: 1 }, { unique: true })

// Forecast
const forecastSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
    period: {
      month: { type: Number, required: true },
      year: { type: Number, required: true },
    },
    predictedDemand: { type: Number, required: true },
    actualDemand: { type: Number },
    confidence: { type: Number },
    method: { type: String, enum: ['moving_avg', 'exponential', 'ml_model'], default: 'moving_avg' },
    generatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)
forecastSchema.index({ tenantId: 1, itemId: 1, 'period.month': 1, 'period.year': 1 }, { unique: true })

module.exports = {
  Vendor: mongoose.model('Vendor', vendorSchema),
  PurchaseOrder: mongoose.model('PurchaseOrder', purchaseOrderSchema),
  GoodsReceipt: mongoose.model('GoodsReceipt', goodsReceiptSchema),
  Inventory: mongoose.model('Inventory', inventorySchema),
  Forecast: mongoose.model('Forecast', forecastSchema),
}