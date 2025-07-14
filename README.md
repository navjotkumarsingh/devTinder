
# DevCoNN - Developer Connect Platform

DevCoNN is a Node.js-based backend application that acts as a fusion of LinkedIn and Tinder — a smart networking platform to help developers connect, collaborate, and grow together. Whether you're looking for a co-founder, coding partner, or tech mentor, DevCoNN facilitates meaningful developer connections.

## 🚀 Features

- 🔐 **User Authentication & Authorization** (JWT-based)
- 🤝 **Connection Request System** (Send, accept, ignore requests)
- 👤 **Profile Management** (View and edit developer profiles)
- 📬 **Secure Password Handling**
- 🧠 **Modular API Structure** using Express.js
- 💾 **MongoDB Integration** via Mongoose ODM

---

## 🏗️ Tech Stack

| Tech             | Purpose                  |
|------------------|---------------------------|
| **Node.js**      | Server-side runtime       |
| **Express.js**   | Web framework             |
| **MongoDB**      | Database                  |
| **Mongoose**     | ODM for MongoDB           |
| **bcrypt**       | Password hashing          |
| **jsonwebtoken** | Token-based auth (JWT)    |
| **cookie-parser**| Secure cookie handling    |
| **dotenv**       | Environment variable mgmt |

---

## 📁 Project Structure

```
DevCoNN/
├── src/
│   ├── models/                 # Mongoose models (User, ConnectionRequest)
│   ├── routes/                 # Express routers (auth, user, profile, request)
│   ├── middlewares/           # Auth & validation middleware
│   └── app.js                 # App entry point
├── .env.example                # Sample environment variables
├── package.json
└── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/auth/register`     | Register a new user             |
| POST   | `/auth/login`        | Login and receive JWT           |
| GET    | `/profile/view`      | View your profile               |
| PUT    | `/profile/edit`      | Edit your profile               |
| POST   | `/request/send`      | Send connection request         |
| POST   | `/request/accept`    | Accept a request                |
| POST   | `/request/ignore`    | Ignore a request                |

📌 **Full API documentation available in [`API.md`](./API.md)**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/DevCoNN.git
cd DevCoNN
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file using the sample below:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devconn
JWT_SECRET=your_jwt_secret
```

### 4. Run the Server
```bash
npm start
```

The server should be running on `http://localhost:7777`.

---

## 🔐 Security & Best Practices

- All passwords are hashed with bcrypt
- JWTs are used for route protection
- Input validation and error handling is enforced
- Folder structure follows modular design

---

## 📌 Future Enhancements

- 🔄 Forgot Password Flow with Email OTP
- 🗂️ Skill-based Connection Matching
- 🛠️ Admin Dashboard for User Moderation
- 📱 Frontend Integration with React.js

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push and create a PR

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Navjot Kumar Singh**

- 💼 [LinkedIn](https://linkedin.com/in/navjot-kumar-singh)
- 🧑‍💻 [GitHub](https://github.com/navjot-kr-singh)
- ✉️ navjotkumarsingh81@gmail.com

---
