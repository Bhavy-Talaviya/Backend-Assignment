# 🚀 Notes Management REST API:-

A complete backend REST API project built using **Node.js, Express.js, MongoDB, and Mongoose** following **MVC architecture** principles. This project demonstrates CRUD operations, REST API design, filtering, searching, sorting, pagination, and advanced query handling.

---

# 📌 Project Overview:-

This project series focuses on building backend fundamentals step by step.

### Assignment 01 Features:-

✅ CRUD Operations<br>
✅ REST API Principles<br>
✅ MongoDB Integration<br>
✅ Mongoose Schema Design<br>
✅ MVC Architecture<br>

### Assignment 02 Features:-

✅ Route Parameters<br>
✅ Query Parameters<br>
✅ Pagination<br>
✅ Sorting<br>
✅ Advanced Filtering<br>

### Assignment 03 Features:-

✅ Search APIs using Regex<br>
✅ Combined Queries<br>
✅ Search + Filter + Sort + Pagination<br>
✅ Master Query Endpoint<br>
✅ Production-Level Query Handling<br>

---

# 🛠 Tech Stack:-

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* Nodemon

---

# 📂 Folder Structure:-

```bash
notes-app/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── note.model.js
│   │
│   ├── controllers/
│   │   └── note.controller.js
│   │
│   ├── routes/
│   │   └── note.routes.js
│   │
│   ├── middlewares/
│   │
│   ├── app.js
│   └── index.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

# ⚙️ Installation:-

### Clone Repository

```bash
git clone <your-repository-link>
cd notes-app
```

### Install Packages

```bash
npm install
```

### Install Dependencies

```bash
npm install express mongoose dotenv
npm install --save-dev nodemon
```

---

# ▶️ Run Project:-

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

---

# 🔥 Core Endpoints:-

## CRUD Operations

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| POST   | /api/notes      | Create Note            |
| POST   | /api/notes/bulk | Create Multiple Notes  |
| GET    | /api/notes      | Get All Notes          |
| GET    | /api/notes/:id  | Get Note By ID         |
| PUT    | /api/notes/:id  | Replace Note           |
| PATCH  | /api/notes/:id  | Update Specific Fields |
| DELETE | /api/notes/:id  | Delete Note            |
| DELETE | /api/notes/bulk | Delete Multiple Notes  |

---

# 🔍 Advanced Query Features:-

## Assignment 02

### Route Parameters

```bash
GET /api/notes/category/:category
GET /api/notes/status/:isPinned
GET /api/notes/:id/summary
```

### Query Parameters

```bash
GET /api/notes/filter
GET /api/notes/filter/pinned
GET /api/notes/filter/category
GET /api/notes/filter/date-range
```

### Pagination

```bash
GET /api/notes/paginate
GET /api/notes/paginate/category/:category
```

### Sorting

```bash
GET /api/notes/sort
GET /api/notes/sort/pinned
```

---

## Assignment 03

### Search APIs

```bash
GET /api/notes/search
GET /api/notes/search/content
GET /api/notes/search/all
```

### Combined APIs

```bash
GET /api/notes/filter-sort
GET /api/notes/filter-paginate
GET /api/notes/sort-paginate
GET /api/notes/search-filter
GET /api/notes/search-sort-paginate
GET /api/notes/filter-sort-paginate
```

### Master Query API

```bash
GET /api/notes/query
```

---

# 📤 Response Format:-

Success Response:

```json
{
   "success": true,
   "message": "Operation successful",
   "data": {}
}
```

Error Response:

```json
{
   "success": false,
   "message": "Error message",
   "data": null
}
```

---

# 📌 HTTP Status Codes:-

| Code | Description  |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 404  | Not Found    |
| 500  | Server Error |

---

# 🧪 Testing:-

API tested using:

* Postman
* MongoDB Atlas
* Local Development Environment

---

# 🔄 Git Workflow:-

Commit after each endpoint implementation.

Example:

```bash
git add .
git commit -m "feat: add create note endpoint (POST /api/notes)"
```

---

# 👨‍💻 Author:-

Bhavy Talaviya
Built for learning backend development using Node.js and MongoDB 🚀
