import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const connectDB = require("./config/database");

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import roleRoutes from "./routes/roleRoutes";
import permissionRoutes from "./routes/permissionRoutes";
import tenantRoutes from "./routes/tenantRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import leaveRoutes from "./routes/leaveRoutes";
import payrollRoutes from "./routes/payrollRoutes";
import payslipRoutes from "./routes/payslipRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import widgetRoutes from "./routes/widgetRoutes";
import reportRoutes from "./routes/reportRoutes";
import chartOfAccountsRoutes from "./routes/chartOfAccountsRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import journalEntryRoutes from "./routes/journalEntryRoutes";
import currencyRoutes from "./routes/currencyRoutes";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import resourceRoutes from "./routes/resourceRoutes";
import budgetRoutes from "./routes/budgetRoutes";
import vendorRoutes from "./routes/vendorRoutes";
import purchaseOrderRoutes from "./routes/purchaseOrderRoutes";
import goodsReceiptRoutes from "./routes/goodsReceiptRoutes";
import inventoryRoutes from "./routes/inventoryRoutes";
import forecastRoutes from "./routes/forecastRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import eventRoutes from "./routes/eventRoutes";
import webhookRoutes from "./routes/webhookRoutes";
import auditLogRoutes from "./routes/auditLogRoutes";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/payrolls", payrollRoutes);
app.use("/api/payslips", payslipRoutes);
app.use("/api/dashboards", dashboardRoutes);
app.use("/api/widgets", widgetRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/chartOfAccounts", chartOfAccountsRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/journalEntries", journalEntryRoutes);
app.use("/api/currencies", currencyRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/purchaseOrders", purchaseOrderRoutes);
app.use("/api/goodsReceipts", goodsReceiptRoutes);
app.use("/api/inventories", inventoryRoutes);
app.use("/api/forecasts", forecastRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/webhooks", webhookRoutes);
app.use("/api/auditLogs", auditLogRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);





app.get("/", (req, res) => {
  res.send("Amdox ERP Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});