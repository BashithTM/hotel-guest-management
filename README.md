# 🏨 Hotel Guest Management

A simple hotel guest management app.

- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** PocketBase (lightweight Go backend with REST + realtime)

Repo: `https://github.com/BashithTM/hotel-guest-management`

---

## ✨ Features
- List, search, create, edit, and delete guests
- Clean UI with Tailwind
- Simple data model (`guests` collection)

---

## ✅ Prerequisites
- **Node.js** 18+ and **npm**
- **PocketBase** (download zip from pocketbase.io and unzip the binary)

---

## 🚀 Quick Start

### 1) Backend — PocketBase
1. Place the PocketBase binary in the project root (or `./backend/`).
2. Start the server:

   **Windows (PowerShell)**
   ```powershell
   .\pocketbase.exe serve
   ```
   **macOS/Linux**
   ```bash
   ./pocketbase serve
   ```

3. Open the **Admin UI**: `http://127.0.0.1:8090/_/`

4. **Admin login (for grading)**
   ```
   Email:    mohammedbashith24@gmail.com
   Password: @bashith2000
   ```

5. Create a **collection** named `guests` with fields:
   - `first_name` — text (required)
   - `last_name` — text (required)
   - `email` — email (required)
   - `phone` — text (optional)
   - `address` — text (optional)
   - `date_of_birth` — date (optional)

> For demo/grading you can set List/View/Create/Update/Delete rules to `true`.

---

### 2) Frontend — React app
1. Create `client/.env`:
   ```
   VITE_PB_URL=http://127.0.0.1:8090
   ```
2. Install & run:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   App: `http://localhost:5173`

(Optional) Build:
```bash
npm run build
npm run preview
```

---

## 📁 Structure
```
hotel-guest-management/
├─ client/
│  ├─ src/
│  │  ├─ components/Layout.tsx
│  │  ├─ lib/pb.ts
│  │  ├─ routes/{Home,Guests,NewGuest,EditGuest}.tsx
│  │  └─ main.tsx
│  ├─ index.css
│  └─ vite.config.ts
├─ pocketbase(.exe)         # binary placed here or in ./backend
├─ .gitignore
├─ .gitattributes
└─ README.md
```

---

## 🔧 Useful Commands
```bash
# Frontend
cd client
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview

# Backend (project root)
./pocketbase serve   # or .\pocketbase.exe serve on Windows
```

---

## 🧯 Troubleshooting
- **Vite plugin error**:  
  ```bash
  cd client
  npm i -D @vitejs/plugin-react vite
  ```
- **OneDrive path issues (Windows)**: Move the project to a non-OneDrive folder (e.g., `C:\Projects\hotel-guest-management`).
- **Line-ending warnings**: `.gitattributes` contains `* text=auto eol=lf`.
- **Push denied / wrong GitHub user**: In VS Code, sign in as `BashithTM` and remove old `github.com` entries from Windows **Credential Manager** if needed.

---

> **Security note:** These credentials are included only to satisfy grading. Change/remove them after submission.
