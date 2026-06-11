const { Role, Permission } = require('./models/Role')

module.exports = {
  User: require('./models/User'),
  Tenant: require('./models/Tenant'),
  Role,
  Permission,

  ...require('./models/finance/Finance'),
  ...require('./models/hr/HR'),
  ...require('./models/supplyChain/SupplyChain'),
  ...require('./models/project/Project'),
  ...require('./models/dashboard/Dashboard'),
  ...require('./models/notification/Notification'),
}