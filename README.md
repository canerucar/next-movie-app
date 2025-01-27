# 🎬 Next.js Movie App

A modern movie browsing application built with Next.js, featuring a responsive design and real-time search capabilities.

🔗 **Live Demo:** [https://next-movie-app-ecru.vercel.app/](https://next-movie-app-ecru.vercel.app/)

## 🚀 Features

- Movie listing with search functionality
- Detailed movie information pages
- Favorite movies system
- Sorting options (by name, year, IMDB rating)
- Responsive design for all devices
- TV Series indicators
- IMDB ratings display

## 🛠 Tech Stack

- **Frontend:**
  - Next.js
  - React
  - TypeScript
  - Redux Toolkit (State Management)
  - CSS Modules (Styling)
  - Axios (API requests)

- **Backend:**
  - json-server (REST API)
  - Node.js

## 🏗 Project Structure

```
next-movie-app/
├── src/
│   ├── app/          # Next.js app directory
│   ├── common/       # Shared components, types, and utilities
│   ├── store/        # Redux store configuration
│   └── server/       # json-server configuration
├── public/           # Static assets
└── ...config files
```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Development
NEXT_PUBLIC_API_URL=http://localhost:3001

# Production
NEXT_PUBLIC_API_URL=https://your-production-api-url
```

## 🚀 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com)
- **Backend:** Deployed on [Railway](https://railway.app)

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-movie-app.git
cd next-movie-app
```

2. Install dependencies:
```bash
npm install
cd server && npm install
```

3. Start the development server:
```bash
# Terminal 1 - Start the API server
cd server
npm start

# Terminal 2 - Start the Next.js app
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 API Endpoints

- `GET /movies` - Get all movies
- `GET /movies/:id` - Get movie by ID

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](your-issues-link).

## 📜 License

This project is [MIT](LICENSE) licensed.

---

Made with ❤️ by [caner](https://github.com/canerucar)
