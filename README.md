# 🚀 Tech Job Radar – by Sumit's TechEdge

Tech Job Radar is a Chrome Extension that helps users discover the latest **tech jobs, internships, and remote opportunities** directly from their browser.

The extension aggregates job listings and displays them in a clean interface with filters, search, bookmarking, and direct apply links.

---

## ✨ Features

* 🔍 **Search Jobs** by role or company
* 📌 **Save / Bookmark Jobs** for later
* 🧑‍💻 **Filter Jobs**

  * All Jobs
  * Internships
  * Full-Time
  * Remote
* ⚡ **Fast Job Loading**
* 🌙 **Dark / Light Mode**
* 🏢 **Company Logos**
* 📰 **Job Source Badges**
* 🔗 **Direct Apply Links**
* ☁️ **Cloud Backend API**

---

## 🧠 Architecture

Tech Job Radar uses a modern full-stack architecture.

```
Chrome Extension
        ↓
Node.js / Express API (Render)
        ↓
MongoDB Atlas
        ↓
Job Scrapers & APIs
```

---

## 🛠 Tech Stack

### Frontend (Extension)

* HTML
* CSS
* Vanilla JavaScript
* Chrome Extension Manifest V3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Render (Backend Hosting)
* Chrome Web Store (Extension Distribution)

---

## 📂 Project Structure

```
tech-job-radar/

extension/
│
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── saved.html
├── saved.js
└── icons/

backend/
│
├── server.js
├── scraper.js
├── routes/
│   └── jobs.js
├── models/
│   └── jobModel.js
└── utils/
    └── jobScrapers/
```

---

## ⚙️ Installation (Local Development)

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/tech-job-radar.git
```

---

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

---

### 3️⃣ Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 4️⃣ Start Backend

```
node server.js
```

---

### 5️⃣ Load Chrome Extension

1. Open Chrome
2. Go to:

```
chrome://extensions
```

3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `extension/` folder

---

## 🌐 API Endpoint

Example:

```
GET /api/jobs
```

Response:

```
[
  {
    "title": "Frontend Developer",
    "company": "Startup",
    "location": "Remote",
    "type": "Internship"
  }
]
```

---

## 🚀 Deployment

Backend deployed using **Render**.

Example API:

```
https://tech-job-radar-backend.onrender.com/api/jobs
```

---

## 📈 Future Improvements

* 🔔 Real-time job notifications
* 🤖 AI job recommendations
* 🌍 More job sources
* 📊 Salary insights
* 📩 Email / Telegram alerts

---

## 👨‍💻 Author

**Sumit Kumar**

YouTube: **Sumit's TechEdge**

GitHub:
https://github.com/YOUR_USERNAME

---

## ⭐ Support

If you find this project useful, consider:

⭐ Starring the repository
🔗 Sharing the extension
💡 Contributing improvements

---

## 📜 License

This project is licensed under the MIT License.
