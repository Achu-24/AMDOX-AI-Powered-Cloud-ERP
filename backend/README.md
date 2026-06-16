# AMDOX AI-Powered Cloud ERP - Backend

## Overview

The AMDOX AI-Powered Cloud ERP Backend is a scalable multi-tenant ERP system designed to manage business operations across Human Resources, Finance, Supply Chain, Project Management, Reporting, and Notifications.

The backend provides secure REST APIs with role-based access control (RBAC), tenant isolation, audit logging, and business intelligence capabilities.

---

## Features

### Authentication & Authorization

* JWT Authentication
* Role-Based Access Control (RBAC)
* User Management
* Permission Management
* Multi-Tenant Architecture

### Human Resources & Payroll

* Employee Management
* Attendance Tracking
* Leave Management
* Payroll Processing
* Payslip Generation

### Finance Management

* Chart of Accounts
* Journal Entries
* Invoice Management
* Payment Management
* Currency Management

### Project Management

* Project Management
* Task Management
* Resource Allocation
* Budget Management

### Supply Chain & Inventory

* Vendor Management
* Purchase Orders
* Goods Receipts
* Inventory Management
* Demand Forecast Records

### Business Intelligence

* Dashboards
* Widgets
* Reports

### Notifications & Audit

* Notifications
* Events
* Webhooks
* Audit Logs

### Documentation

* Swagger/OpenAPI Documentation

---

## Technology Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB
* Mongoose ODM

### Authentication

* JWT (JSON Web Tokens)
* bcrypt

### Documentation

* Swagger UI
* Swagger JSDoc

---

## Project Structure

backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Prerequisites

Before running the project, ensure the following are installed:

* Node.js (v18 or later)
* npm
* MongoDB

---

## Environment Variables

Create a `.env` file in the backend root directory.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/amdox_erp

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Achu-24/AMDOX-AI-Powered-Cloud-ERP.git
```

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

Server will start

---

### Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## API Documentation

Swagger documentation is available at:

```
http://localhost:5000/api-docs
```

---

## Database Setup

Start MongoDB locally:

```bash
mongod
```

Ensure the connection string in `.env` matches your MongoDB instance.

Example:

```env
MONGO_URI=mongodb://localhost:27017/amdox_erp
```

---

## Available API Modules

### Authentication

* /api/auth

### Users & Access Control

* /api/users
* /api/roles
* /api/permissions
* /api/tenants

### HR & Payroll

* /api/employees
* /api/attendance
* /api/leaves
* /api/payrolls
* /api/payslips

### Finance

* /api/chartOfAccounts
* /api/journalEntries
* /api/invoices
* /api/payments
* /api/currencies

### Project Management

* /api/projects
* /api/tasks
* /api/resources
* /api/budgets

### Supply Chain

* /api/vendors
* /api/purchaseOrders
* /api/goodsReceipts
* /api/inventories
* /api/forecasts

### Dashboard & Reporting

* /api/dashboards
* /api/widgets
* /api/reports

### Notifications & Audit

* /api/notifications
* /api/events
* /api/webhooks
* /api/auditLogs

---

## Current Status

Completed Modules:

* Authentication & RBAC
* Multi-Tenant Management
* HR & Payroll
* Finance
* Supply Chain
* Project Management
* Dashboard & Reporting
* Notifications
* Audit Logging
* Swagger Documentation

---
