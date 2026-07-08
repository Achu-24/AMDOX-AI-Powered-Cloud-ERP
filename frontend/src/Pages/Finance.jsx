import { BadgeIndianRupee, ReceiptText, TrendingUp, Wallet } from "lucide-react";
import StatCard from "../components/StatCard";

function Finance() {
  const invoices = [
    { id: "INV-1024", client: "Amdox Cloud", amount: "₹82,000", status: "Paid" },
    { id: "INV-1025", client: "RetailOps", amount: "₹46,500", status: "Pending" },
    { id: "INV-1026", client: "SupplyPro", amount: "₹1,24,000", status: "Paid" },
  ];

  return (
    <section className="page">
      <div className="module-hero finance-hero">
        <span>Finance Management</span>
        <h2>Track revenue, invoices, expenses, and financial performance.</h2>
        <p>
          Monitor business cash flow with clean finance dashboards, payment
          records, and monthly performance summaries.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard title="Revenue" value="₹5.4L" change="+14% growth" icon={BadgeIndianRupee} tone="purple" />
        <StatCard title="Expenses" value="₹1.8L" change="-6% reduced" icon={Wallet} tone="cyan" />
        <StatCard title="Invoices" value="42" change="12 pending" icon={ReceiptText} tone="green" />
        <StatCard title="Profit" value="₹3.6L" change="+18% margin" icon={TrendingUp} tone="orange" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>Recent Invoices</h3>
            <p>Latest billing activity</p>
          </div>
          <span>Finance</span>
        </div>

        <div className="data-table">
          <div className="table-row table-head">
            <span>Invoice ID</span>
            <span>Client</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          {invoices.map((invoice) => (
            <div className="table-row" key={invoice.id}>
              <span>{invoice.id}</span>
              <span>{invoice.client}</span>
              <span>{invoice.amount}</span>
              <span className={invoice.status === "Paid" ? "status paid" : "status pending"}>
                {invoice.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Finance;