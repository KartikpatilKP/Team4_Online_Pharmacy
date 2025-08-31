import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./components/Admin/AdminDashboard";
import MemberDashboard from "./components/Member/MemberDashboard";
import Profile from "./components/Member/Profile";
import Cart from "./components/Member/Cart";
import Orders from "./components/Member/Orders";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import ManageMembers from "./components/Admin/ManageMembers";
import AddDrug from "./components/Admin/AddDrug";
import ManageDrugs from "./components/Admin/ManageDrugs";
import ManageOrder from "./components/Admin/ManageOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Member Routes */}
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/member/profile" element={<Profile />} />
        <Route path="/member/cart" element={<Cart />} />
        <Route path="/member/orders" element={<Orders />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/members" element={<ManageMembers />} />
        <Route path="/admin/add-drug" element={<AddDrug />} />
        <Route path="/admin/drugs" element={<ManageDrugs />} />
        <Route path="/admin/orders" element={<ManageOrder />}/>
        <Route path="/admin/manage-orders" element={<ManageOrder />} /> {/* ✅ Fixed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

