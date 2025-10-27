# 🚀 DevEvent — The Hub of Every Developer Event

DevEvent is a **Next.js 16** application that brings together all major **developer events** — hackathons, meetups, and conferences — in one place.  
It allows organizers to post events and developers to explore them easily.

---

## 🌐 Live Demo
> Coming soon (Add your deployed link here once ready)

---

## 🧠 Features

- 🗓️ **Browse Events:** Discover hackathons, meetups, and conferences.
- 🪶 **Create Events:** Add new events with full details, including image uploads.
- ☁️ **Cloudinary Integration:** Upload and store event images securely.
- ⚡ **Dynamic Data Fetching:** Always get real-time event updates.
- 🗃️ **MongoDB Database:** Persistent and reliable storage for events.
- 🧩 **Next.js App Router:** Modern routing with dynamic segments.
- 🎨 **Tailwind CSS Styling:** Clean and responsive UI design.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | Next.js 16 (App Router), React, Tailwind CSS |
| Backend | Next.js API Routes, Node.js |
| Database | MongoDB, Mongoose |
| Media Storage | Cloudinary |
| Deployment | Vercel / Any Node Hosting |

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/devevent.git
cd devevent
```

#### 2️⃣ Install Dependencies
```bash
npm install
```

#### 3️⃣ Create .env.local File

Inside the root folder, create a .env.local file and add the following:

```bash 
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```
#### 4️⃣ Run the Development Server
```bash
npm run dev
```

### 📁 Project Structure
``` bash
src/
│
├── app/
│   ├── api/
│   │   └── events/
│   │       └── route.js        # API routes for event CRUD operations
│   ├── events/
│   │   └── [slug]/page.jsx     # Dynamic event details page
│   └── page.jsx                # Home page (fetches events)
│
├── components/                 # Reusable React components
├── database/                   # MongoDB models
├── lib/                        # Utility functions (e.g., mongoose connection)
└── public/                     # Static assets

```

#### 💾 API Endpoints
| Method   | Endpoint             | Description                              |
| -------- | -------------------- | ---------------------------------------- |
| **GET**  | `/api/events`        | Fetch all events                         |
| **POST** | `/api/events`        | Create a new event (multipart/form-data) |
| **GET**  | `/api/events/[slug]` | Fetch event details by slug              |


#### 🧩 Important Route Configurations
To ensure fresh, dynamic data and compatibility with Node.js APIs:
```bash
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
```

#### 🧪 Example POST Body (FormData)
When creating an event, send a multipart/form-data payload:
| Field         | Type       | Description                                       |
| ------------- | ---------- | ------------------------------------------------- |
| `title`       | String     | Event title                                       |
| `description` | String     | Event details                                     |
| `date`        | String     | Event date                                        |
| `location`    | String     | Venue or online link                              |
| `image`       | File       | Event image                                       |
| `tags`        | JSON Array | Example: `["Hackathon","AI"]`                     |
| `agenda`      | JSON Array | Example: `[{"time":"10AM","activity":"Keynote"}]` |


#### 🧑‍💻 Developer Notes
###### This project uses Next.js App Router with Server Components.
###### Dynamic data fetching ensures no stale events after creation.
###### Make sure Cloudinary credentials are valid before uploading.

#### 🏁 Future Improvements
User authentication and dashboards

Event registration system

Filtering and search for events

Bookmark / Interested event list

#### 🪪 License
This project is licensed under the MIT License.

### 💡 Author
Prithvi Raj