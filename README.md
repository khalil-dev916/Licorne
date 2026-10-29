# 🦄 Licorne — MERN E-commerce Shop

A full-stack e-commerce web app built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Redux Toolkit / RTK Query**, developed end-to-end while following a university MERN/React course (GLSI — Dr. Tarek BCHINI, PDF pages 7 → 147, completed).

## ✨ Features

- 🛍 Product catalog (8 seeded products) in a responsive Bootstrap grid
- ⚡ Live data through **RTK Query** (auto-caching, background refetch) — no manual state juggling
- 📄 Product detail pages (image, rating, stock status)
- 🧱 Clean **MVC backend**: routes → controllers → Mongoose models
- 🛡 Error-handling middleware: unknown routes and invalid IDs return clean JSON (404), never raw crashes
- 💉 Database **seeder** (import/destroy scripts) with bcrypt-hashed user accounts
- 🧪 Versioned **Postman collection** (5 requests, including failure paths) in `postman/`
- 🗄 Cloud database: **MongoDB Atlas** (free M0)

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, React Router, React-Bootstrap, Redux Toolkit (RTK Query) |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB Atlas |
| DevOps / Tools | Git & GitHub, Postman, nodemon, concurrently, dotenv |

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/khalil-dev916/Licorne.git
cd Licorne

# 2. Environment config
copy example.env .env        # Windows (use cp example.env .env on Mac/Linux)
# then edit .env and put YOUR MongoDB Atlas connection string in MONGO_URI

# 3. Install dependencies (root + frontend)
npm install
cd frontend && npm install && cd ..

# 4. Seed the database (8 products + 2 demo users)
npm run data:import

# 5. Run both servers together (frontend :3000 + backend :5000)
npm run dev
```

Open **http://localhost:3000** 🦄

**Demo accounts created by the seeder** (fake data): `admin@licorne.com` / `khalil@licorne.com` — password `123456`

### Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Frontend + backend together (concurrently) |
| `npm run server` | Backend only, with nodemon auto-restart |
| `npm run client` | Frontend only |
| `npm run data:import` | Wipe & refill products/users in the database |
| `npm run data:destroy` | Empty the database |

## 📂 Project Structure

```
├── backend/
│   ├── config/db.js           # MongoDB Atlas connection
│   ├── controllers/           # route handlers (getProducts, getProductById)
│   ├── data/                  # seed data (products, users)
│   ├── middleware/            # notFound + errorHandler
│   ├── models/                # Product, User, Order (Mongoose schemas)
│   ├── routes/                # /api/products router
│   ├── seeder.js              # import/destroy script
│   └── server.js              # Express entry point
├── frontend/
│   └── src/
│       ├── components/        # Header, Footer, Product, Rating, Loader, Message
│       ├── screens/           # HomeScreen, ProductScreen
│       ├── slices/            # apiSlice (parent) + productsApiSlice (RTK Query)
│       ├── store.js           # Redux store
│       └── constants.js       # API URLs
├── postman/                   # API test collection (Postman Local View)
├── example.env                # env template (the real .env is git-ignored)
└── package.json               # dev / server / client / data:* scripts
```

## 🧠 What this project covers

React fundamentals → React Router → REST APIs → Express → MongoDB & Mongoose → MVC architecture → error middleware → Postman API testing → **Redux Toolkit & RTK Query** (axios fully replaced by generated query hooks). Every chapter of the 147-page course was implemented, tested and pushed as an individual commit — the git history reads as a build journal.

## 📜 License

MIT — see [LICENSE](LICENSE).
