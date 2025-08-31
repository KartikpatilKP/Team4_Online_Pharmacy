# Team4_Online_Pharmacy

# 💊 Online Pharmacy Portal  
### (Online Drug Ordering System)

An **online medicine ordering platform** that enables users to securely purchase medicines while providing admins with full control over drug inventory, member management, and order processing.  

---

## 🛠️ System Modules  

### 🔐 Authentication & Security  
- User **Login/Logout** functionality  
- **Member Registration** (with Admin approval)  
- Password protection & validation  

---

### 💊 Drug Management (Admin)  
- ➕ Add new drugs  
- 📋 List all available drugs  
- ✏️ Edit drug details  
- ❌ Delete drugs  
- 🔎 Search drug 

#### 👥 Drug Access (Members)  
- View drug details 

---

### 👤 Member Management  
#### Admin Features:  
- 👀 View all members  
- 🚫 Disable defaulting members  
- ❌ Delete a member  
- ✏️ Update member details  

#### Member Features:  
- 📝 Register & Edit profile (email, phone, etc.)  
- ✅ Requires **Admin approval** before login access  

---

### 🛒 Medicine Order Module (Members)  
- 🛍️ Order medicines online  
- 📉 Stock updated before adding to cart  
- ➕ Add multiple drugs to cart  
- 💰 Auto-calculation of **total price**  
- ✅ Checkout with integrated **Payment Gateway**  
- 🗑️ Cart automatically clears after order completion  

🔒 **Order Restrictions**  
- ❌ Cannot order if **stock = 0**  
- ❌ Cannot order if **requested qty > available stock**  

---

## 🚀 Getting Started  

### 📌 Requirements  
- ☕ **Java (JDK 8+)**  
- 🐬 **MySQL / MariaDB**  
- 🌐 **Apache Tomcat** (if using JSP/Servlets)  
- 📦 **Maven**  
- 💻 **VS Code / IntelliJ IDEA**  
- ⚡ **React (Vite)**  

---

## ⚙️ Setup & Run Instructions  

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/KartikpatilKP/Team4_online_pharma.git
cd Team4_online_pharma
