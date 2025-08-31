import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "../../styles/AdminDashboard.css";
import { FaUsers, FaPills, FaClipboardList, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [medicineCount, setMedicineCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicineCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/medicines/count");
        setMedicineCount(response.data);
      } catch (error) {
        console.error("Error fetching medicine count:", error);
        setMedicineCount(0);
      }
    };

    const fetchMemberCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/members/count");
        setMemberCount(response.data);
      } catch (error) {
        console.error("Error fetching member count:", error);
        setMemberCount(0);
      }
    };

    const fetchOrderCountAndActivity = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders/all");
        setOrderCount(response.data.length);
        const sortedOrders = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setRecentOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching order data:", error);
        setOrderCount(0);
        setRecentOrders([]);
      }
    };

    fetchMedicineCount();
    fetchMemberCount();
    fetchOrderCountAndActivity();
  }, []);

  const stats = [
    { label: "Total Members", value: memberCount, icon: <FaUsers style={{ color: "#b7bc1aff" }} /> },
    { label: "Total Medicines", value: medicineCount, icon: <FaPills style={{ color: "#db3469ff" }} /> },
    { label: "Total Orders", value: orderCount, icon: <FaClipboardList style={{ color: "#e67e22" }} /> },
  ];

  const quickLinks = [
    { label: "Manage Medicines", icon: <FaPills />, route: "/admin/drugs" },
    { label: "Manage Members", icon: <FaUsers />, route: "/admin/members" },
    { label: "View Orders", icon: <FaClipboardList />, route: "/admin/orders" },
  ];

  return (
    <div className="admin-dashboard-root">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className="admin-main-content"
        style={{ marginLeft: collapsed ? 60 : 250, width: `calc(100vw - ${collapsed ? 60 : 250}px)` }}
      >
        <header className="admin-header3">
          <div className="admin-title">Welcome to Admin Dashboard</div>
        </header>

        <section className="admin-stats">
          {stats.map((stat) => (
            <div className="admin-stat-card" key={stat.label}>
              <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>{stat.icon}</div>
              <div className="admin-stat-label">{stat.label}</div>
              <div className="admin-stat-value">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="admin-actions">
          {quickLinks.map((link) => (
            <div
              key={link.label}
              className="admin-stat-card"
              onClick={() => navigate(link.route)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{link.icon}</div>
              <div className="admin-stat-label">{link.label}</div>
              <FaArrowRight style={{ marginTop: 6, fontSize: "1rem", color: "#555" }} />
            </div>
          ))}
        </section>

        <section className="admin-activity">
          <h2>Recent Orders</h2>
          <ul>
            {recentOrders.map((order) => (
              <li key={order.id}>
                <span className="activity-action">
                  Order #{order.id} placed by Member #{order.memberId}
                </span>
              </li>
            ))}
            {recentOrders.length === 0 && (
              <li><span className="activity-action">No recent orders</span></li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;