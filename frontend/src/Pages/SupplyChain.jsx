import { Package, ShoppingCart, Truck, Warehouse } from "lucide-react";
import StatCard from "../components/StatCard";

function SupplyChain() {
  const inventory = [
    { item: "Laptop Units", stock: "86", supplier: "TechSource", status: "Stable" },
    { item: "Office Chairs", stock: "14", supplier: "FurniHub", status: "Low Stock" },
    { item: "ID Cards", stock: "240", supplier: "PrintWorks", status: "Stable" },
  ];

  return (
    <section className="page">
      <div className="module-hero supply-hero">
        <span>Supply Chain</span>
        <h2>Monitor inventory, suppliers, purchase orders, and stock movement.</h2>
        <p>
          Track procurement and inventory performance with real-time stock
          summaries and supplier visibility.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard title="Inventory" value="450" change="32 low stock" icon={Package} tone="purple" />
        <StatCard title="Suppliers" value="18" change="4 preferred" icon={Truck} tone="cyan" />
        <StatCard title="Orders" value="64" change="12 active" icon={ShoppingCart} tone="green" />
        <StatCard title="Warehouses" value="03" change="All active" icon={Warehouse} tone="orange" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>Inventory Status</h3>
            <p>Stock and supplier overview</p>
          </div>
          <span>Supply</span>
        </div>

        <div className="data-table">
          <div className="table-row table-head">
            <span>Item</span>
            <span>Stock</span>
            <span>Supplier</span>
            <span>Status</span>
          </div>

          {inventory.map((item) => (
            <div className="table-row" key={item.item}>
              <span>{item.item}</span>
              <span>{item.stock}</span>
              <span>{item.supplier}</span>
              <span className={item.status === "Stable" ? "status paid" : "status pending"}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupplyChain;