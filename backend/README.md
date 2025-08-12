# Online Pharmacy - Full Backend (MySQL)

What's included:
- Spring Boot backend with Member (User), Address, Drug, DrugOrder entities
- Repositories, Services, Controllers (Auth, Drugs, Orders)
- JWT util and simple filter
- MySQL placeholders in application.properties

How to run:
1. Create a MySQL database named `online_pharmacy` (or change the URL).
2. Update `src/main/resources/application.properties` with your DB username/password and a strong `app.jwt.secret`.
3. Build and run:
   mvn clean package
   mvn spring-boot:run

Notes:
- This is a scaffold to get you started. You should harden security, add validation, and set up proper exception handling before production.
