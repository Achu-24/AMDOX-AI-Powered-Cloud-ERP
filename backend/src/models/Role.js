const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    resource: { type: String, required: true },
    action: { type: String, enum: ['create', 'read', 'update', 'delete', 'manage'], required: true },
    description: { type: String },
  },
  { timestamps: true }
)

const roleSchema = new mongoose.Schema(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, index: true },
    name: { type: String, required: true },
    description: { type: String },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
)

roleSchema.index({ tenantId: 1, name: 1 }, { unique: true })

const Permission = mongoose.model('Permission', permissionSchema)
const Role = mongoose.model('Role', roleSchema)

module.exports = { Role, Permission }