# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Get API Key
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Copy your API key

### 2. Backend Setup
```bash
cd backend
npm install
cp env.example .env
# Edit .env and add your API key
npm start
```
✅ Backend running on `http://localhost:5000`

### 3. Frontend Setup (New Terminal)
```bash
cd frontend
npm install
npm start
```
✅ Frontend running on `http://localhost:3000`

### 4. Test It!
- Enter a city name (e.g., "London")
- Click Search
- See weather data!

## 📁 Project Structure
```
talentx-tech-ass-1/
├── backend/          → Node.js/Express API
│   └── server.js     → Main backend file
└── frontend/         → React App
    └── src/
        └── components/ → React components
```

## 🔧 Commands Reference

### Backend
```bash
cd backend
npm start              # Start server
```

### Frontend
```bash
cd frontend
npm start              # Start React app
npm run build          # Build for production
```

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Can't connect to server | Make sure backend is running on port 5000 |
| Invalid API key | Check `.env` file, wait 5-10 min for activation |
| City not found | Check spelling, try major cities |
| Port already in use | Change PORT in backend/.env |

## 📊 API Endpoint

```
GET http://localhost:5000/api/weather?city=London
```

## 📝 Logs Location
```
backend/logs/api-requests.log
```

## 🎯 Requirements Met

✅ React frontend with modern UI  
✅ Node.js/Express backend  
✅ OpenWeatherMap API integration  
✅ Request/response logging  
✅ Comprehensive error handling  
✅ Well-organized, commented code  
✅ Separate frontend/backend folders  

---

**Need more details?** See `SETUP_GUIDE.md` or `README.md`

