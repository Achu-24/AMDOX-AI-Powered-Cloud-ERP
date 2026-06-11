const mongoose = require('mongoose')
const connectDB = require('./database')
const { Tenant } = require('../index')
const { Role, Permission } = require('../index')
const User = require('../models/User')
const { Currency } = require('../models/finance/Finance')

const seed = async () => {
  await connectDB()
  await mongoose.connection.dropDatabase()
  console.log('DB cleared')

  // Permissions
  const resources = ['users', 'employees', 'finance', 'hr', 'supplyChain', 'projects', 'reports', 'settings']
  const actions = ['create', 'read', 'update', 'delete', 'manage']
  const permDocs = []
  for (const resource of resources) {
    for (const action of actions) {
      permDocs.push({ name: `${resource}:${action}`, resource, action })
    }
  }
  const permissions = await Permission.insertMany(permDocs)
  console.log(`Created ${permissions.length} permissions`)

  // Tenant
  const tenant = await Tenant.create({
    name: 'Amdox Demo',
    slug: 'amdox-demo',
    plan: 'enterprise',
    settings: { currency: 'USD', timezone: 'UTC' },
  })
  console.log('Tenant created:', tenant.slug)

  // Roles
  const allPermIds = permissions.map(p => p._id)
  const adminRole = await Role.create({
    tenantId: tenant._id,
    name: 'Admin',
    description: 'Full access',
    permissions: allPermIds,
    isDefault: false,
  })
  const viewerRole = await Role.create({
    tenantId: tenant._id,
    name: 'Viewer',
    description: 'Read-only access',
    permissions: permissions.filter(p => p.action === 'read').map(p => p._id),
    isDefault: true,
  })
  console.log('Roles created: Admin, Viewer')

  // Admin user
  await User.create({
    tenantId: tenant._id,
    name: 'Super Admin',
    email: 'admin@amdox.com',
    password: 'Admin@1234',
    role: adminRole._id,
  })
  console.log('Admin user created: admin@amdox.com / Admin@1234')

  // Currencies
  await Currency.insertMany([
    { code: 'USD', name: 'US Dollar', symbol: '$', exchangeRate: 1 },
    { code: 'EUR', name: 'Euro', symbol: '€', exchangeRate: 0.92 },
    { code: 'GBP', name: 'British Pound', symbol: '£', exchangeRate: 0.79 },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', exchangeRate: 83.5 },
  ])
  console.log('Currencies seeded')

  console.log('\n✅ Seed complete')
  process.exit(0)
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})