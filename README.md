# 🏠 Smart Property & Rental Management Platform – Web

Frontend Web Application for the Smart Property & Rental Management Platform.

A scalable, role-based property discovery and rental management system designed to solve housing discovery challenges in Ghana and emerging markets.

---

## 🚀 Overview

The Web App serves as the primary interface for:

- Renters searching and booking properties
- Landlords listing and managing properties
- Agents managing multiple properties
- Admins verifying listings to reduce scams

This project is part of a multi-repository architecture:

| Repository | Tech Stack                 |
| ---------- | -------------------------- |
| Web        | Angular + Tailwind CSS     |
| API        | Spring Boot + JWT          |
| Mobile     | Flutter                    |
| Database   | PostgreSQL (PostGIS Ready) |

---

## 🏗 Architecture

Built using **Modern Angular Standalone Architecture** .

- Standalone Components (No NgModules)
- Feature-based routing (`*.routes.ts`)
- Lazy-loaded feature domains
- Role-Based Access Control (RBAC)
- Clean separation of:
  - Core (services, interceptors, guards)
  - Shared (UI components, pipes, models)
  - Features (auth, properties, bookings, dashboard)

---

## 🧩 Project Structure

src/
│── app/
│ ├── core/
│ │ ├── auth/
│ │ ├── interceptors/
│ │ ├── services/
│ │
│ ├── shared/
│ │ ├── components/
│ │ ├── pipes/
│ │ ├── models/
│ │
│ ├── features/
│ │ ├── auth/
│ │ ├── properties/
│ │ ├── bookings/
│ │ ├── messaging/
│ │ ├── dashboard/
│ │
│ ├── layouts/
│ │ ├── auth-layout/
│ │ ├── main-layout/
│
│ └── app.routes.ts

## 🔐 Authentication & Roles

Role-Based Access:

- RENTER
- LANDLORD
- AGENT
- ADMIN

Authentication handled via:

- JWT Token Storage
- HTTP Interceptor for Authorization
- AuthGuard & RoleGuard for route protection

---

## 💻 Tech Stack (Web)

- Angular (Standalone API)
- TypeScript
- Tailwind CSS
- RxJS
- Angular Router (Lazy Loaded Features)

---

## 📌 Core Features

### 👤 Authentication

- Login / Register
- Role-based registration
- JWT secured routes

### 🏠 Properties

- List properties
- Advanced filtering
- Property detail view
- Image gallery
- Availability calendar (Upcoming)

### 📅 Bookings

- Schedule visit
- Booking status tracking

### 💬 Messaging (Planned)

- In-app landlord/renter chat

### 🛡 Admin Dashboard

- Verify listings
- Remove fraudulent properties
- Analytics overview

---

## 🗄 Backend API

The Web application integrates with the Spring Boot API repository which provides:

- RESTful endpoints
- JWT authentication
- PostgreSQL relational database
- PostGIS support for geo-location queries
- Redis caching (planned for popular listings)

---

## 🌍 Target Problem

In Ghana and many African regions:

- Property discovery is difficult
- Listings are scattered and unreliable
- High risk of rental scams

This platform centralizes listings and introduces verification to improve trust and accessibility.

---

## 🔄 Future Improvements

- Google Maps / Mapbox integration
- Real-time chat via WebSocket
- Property recommendation engine
- Redis caching for high-traffic endpoints
- Analytics dashboard with charts
- Payment integration🛠 Installation & Setup

## 🛠 Installation & Setup

# Clone repository

git clone [https://github.com/emmaephrim/smart-rent-web.git](https://github.com/emmaephrim/smart-rent-web.git)

# Install dependencies

cd smart-rent-web

npm install

# Run development server

ng serve

## 🔗 Related Repositories

- [API Repository (Spring Boot)](https://github.com/emmaephrim/smart-rent-api.git)
- [Mobile App Repository (Flutter)](https://github.com/emmaephrim/smart-rent-mobile.git)

## 👨🏾‍💻 Author

**Emmanuel Ephrim**
Fullstack Developer | Mobile Developer | Cloud | Web Developer

Built as part of a scalable property-tech ecosystem focused on solving real housing discovery challenges in Africa.

## 📄 License

This project is for educational and portfolio purposes.
