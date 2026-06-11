const mongoose = require('mongoose')

const tenantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    plan: { type: String, enum: ['starter', 'professional', 'enterprise'], default: 'starter' },
    isActive: { type: Boolean, default: true },
    settings: {
      currency: { type: String, default: 'USD' },
      timezone: { type: String, default: 'UTC' },
      dateFormat: { type: String, default: 'YYYY-MM-DD' },
      fiscalYearStart: { type: String, default: '01-01' },
      logo: { type: String },
    },
    billingEmail: { type: String },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Tenant', tenantSchema)