Team4_Online_Pharmacy

# 💊 Online Pharmacy Portal  
### 🛒 Online Medicine Ordering & Management System

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

# 1️⃣ Clone Repository  
```bash
git clone https://github.com/KartikpatilKP/Team4_online_pharma.git
cd Team4_online_pharma

```
# 2️⃣ Backend (Spring Boot + MySQL)

cd backend
```
# Configure database
# Edit src/main/resources/application.properties:
# spring.datasource.url=jdbc:mysql://localhost:3306/onlinepharma
# spring.datasource.username=root
# spring.datasource.password=root


```
# Build & run

mvn clean install

mvn spring-boot:run

# 3️⃣ Frontend (React + Vite)

cd frontend

1.Install dependencies      
    --npm install

2.Run development server  
    --npm run dev

👉 Frontend will run at: http://localhost:5173

## 📸 Application Screenshots
<img width="1919" height="1079" alt="Screenshot 2025-08-31 121511" src="https://github.com/user-attachments/assets/eed6ff7b-c91f-43e0-a6f3-830525c165ea" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 121445" src="https://github.com/user-attachments/assets/138c3490-fe65-4d81-a13a-066571dfd275" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 121458" src="https://github.com/user-attachments/assets/5733fb47-2a1a-42f2-b869-e9c389f893e0" />
<img width="1919" height="1034" alt="Screenshot 2025-08-31 123629" src="https://github.com/user-attachments/assets/ae65cdee-2084-410d-ad00-da515db291d5" />

## 📸 Admin Page's Screenshots
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122024" src="https://github.com/user-attachments/assets/8d058789-9590-4a47-ba30-ad9ab871ee86" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 121814" src="https://github.com/user-attachments/assets/6fb25ede-8a87-41c6-8085-7e402030fd3d" />
<img width="1919" height="1075" alt="Screenshot 2025-08-31 121833" src="https://github.com/user-attachments/assets/8c5d4db3-26de-497c-8d66-f9e091703bd5" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 121916" src="https://github.com/user-attachments/assets/ed322975-5fa9-4861-9761-6f52a05dd82f" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122043" src="https://github.com/user-attachments/assets/ecf5d56b-02ae-4680-9f21-a01cbccf8b07" />
<img width="1919" height="1029" alt="Screenshot 2025-08-31 123701" src="https://github.com/user-attachments/assets/0cfb8089-9ff7-4815-b431-133a8e266ca6" />

## 📸 Member Page's Screenshots 
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122140" src="https://github.com/user-attachments/assets/79825fae-2360-4c47-9488-925928b351b8" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122151" src="https://github.com/user-attachments/assets/9c3d982a-c180-465d-9c9a-2620a22159b6" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122201" src="https://github.com/user-attachments/assets/3c9dcf88-5527-4bb9-88a6-dc4520557c10" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122211" src="https://github.com/user-attachments/assets/0532ac41-1b73-41d4-bef9-3511d261d478" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 122317" src="https://github.com/user-attachments/assets/4cb28d75-85bf-4114-83cf-345947df9196" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 125233" src="https://github.com/user-attachments/assets/e01de860-d0ee-4589-8d11-1a5efea68642" />







