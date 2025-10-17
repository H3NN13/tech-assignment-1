# Weather Dashboard - Setup Guide

This guide will walk you through setting up and running the Weather Dashboard application step by step.

## ⚡ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A text editor (VS Code, Sublime Text, etc.)
- A web browser (Chrome, Firefox, Safari, Edge)

To verify your installations, run:
```bash
node --version
npm --version
```

## 📝 Step 1: Get Your OpenWeatherMap API Key

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Click "Sign Up" in the top right corner
3. Create a free account
4. After signing in, go to "API keys" section in your account
5. Copy your API key (or generate a new one)
6. **Important:** It may take 5-10 minutes for your API key to activate

Keep this API key handy - you'll need it in Step 3!

## 🔧 Step 2: Install Backend Dependencies

Open your terminal and navigate to the project directory:

```bash
cd /path/to/talentx-tech-ass-1
```

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

You should see output indicating packages are being installed.

## 🔑 Step 3: Configure Backend Environment

While in the `backend` directory, create your environment file:

```bash
cp env.example .env
```

Now open the `.env` file in your text editor and add your API key:

```
OPENWEATHER_API_KEY=your_actual_api_key_here
PORT=5000
```

Replace `your_actual_api_key_here` with the API key you got from OpenWeatherMap.

**Example:**
```
OPENWEATHER_API_KEY=abc123def456ghi789jkl012mno345pq
PORT=5000
```

Save the file.

## ▶️ Step 4: Start the Backend Server

Still in the `backend` directory, start the server:

```bash
npm start
```

You should see:
```
Backend server is running on port 5000
Weather API endpoint: http://localhost:5000/api/weather
Logs are being written to: /path/to/backend/logs/api-requests.log
```

**Keep this terminal window open!** The backend needs to keep running.

## 🎨 Step 5: Install Frontend Dependencies

Open a **NEW terminal window** (keep the backend running in the first one).

Navigate to the frontend directory:

```bash
cd /path/to/talentx-tech-ass-1/frontend
npm install
```

This will take a minute or two to install all React dependencies.

## 🚀 Step 6: Start the Frontend Application

Still in the `frontend` directory, start the React app:

```bash
npm start
```

The application should automatically open in your browser at `http://localhost:3000`

If it doesn't open automatically, open your browser and go to: `http://localhost:3000`

## ✅ Step 7: Test the Application

1. You should see the Weather Dashboard with a search bar
2. Enter a city name (e.g., "London", "New York", "Tokyo", "Paris")
3. Click the "Search" button or press Enter
4. Wait a moment for the weather data to load
5. You should see a beautiful weather card with:
   - Temperature
   - Weather condition with icon
   - Humidity
   - Pressure
   - Wind speed
   - Cloudiness

### Test Different Scenarios:

**Valid City:**
```
Enter: London
Expected: Weather data displays successfully
```

**Invalid City:**
```
Enter: InvalidCityName123
Expected: Error message "City 'InvalidCityName123' not found"
```

**Empty Search:**
```
Click Search without entering anything
Expected: Error message "Please enter a city name"
```

**Multiple Cities:**
```
Search for: New York, then Tokyo, then Paris
Expected: Data updates correctly for each city
```

## 📊 Step 8: Check the Logs

All API requests are being logged! To view them:

1. Navigate to the backend directory
2. Open the file: `backend/logs/api-requests.log`

You'll see entries like:
```
[2025-10-17T12:00:00.000Z] City: London | Status: 200 | Message: Success
[2025-10-17T12:01:30.000Z] City: InvalidCity | Status: 404 | Message: City 'InvalidCity' not found
```

## 🛑 Stopping the Application

When you're done:

1. In the **frontend terminal**: Press `Ctrl + C`
2. In the **backend terminal**: Press `Ctrl + C`

## 🐛 Troubleshooting

### Problem: "Cannot connect to the server"

**Solution:**
- Make sure the backend is running (check terminal)
- Verify the backend is on port 5000
- Try accessing `http://localhost:5000/api/health` in your browser - you should see a JSON response

### Problem: "Invalid API key" or "401 error"

**Solution:**
- Check your `.env` file has the correct API key
- Make sure there are no extra spaces
- Wait 5-10 minutes if you just created the API key
- Try regenerating a new API key from OpenWeatherMap

### Problem: "City not found"

**Solution:**
- Check spelling of the city name
- Try a major city (London, Tokyo, Paris, New York)
- Some cities need more specific names (e.g., "Portland, OR" vs just "Portland")

### Problem: "Port 5000 already in use"

**Solution:**
- Another application is using port 5000
- Stop that application, or
- Change the port in `backend/.env`:
  ```
  PORT=5001
  ```
- Then also update `frontend/env.example` or create `frontend/.env`:
  ```
  REACT_APP_API_URL=http://localhost:5001
  ```

### Problem: Frontend won't start

**Solution:**
- Make sure you ran `npm install` in the frontend directory
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Check if port 3000 is available

### Problem: "npm: command not found"

**Solution:**
- Node.js is not installed or not in your PATH
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

## 📱 Using the Application

### Search Tips:
- Use city names in English
- Major cities work best (London, Paris, Tokyo, New York, Sydney)
- You can include country codes: "London,UK" or "Paris,FR"
- The search is not case-sensitive

### Features to Try:
- Resize your browser window to see responsive design
- Try on mobile device
- Check different cities around the world
- View the weather icons that change based on conditions

## 🎓 Understanding the Code

### Backend (Node.js/Express)
- `backend/server.js` - Main server file with API endpoints
- All API calls are logged to `backend/logs/api-requests.log`
- Handles errors gracefully
- Uses environment variables for security

### Frontend (React)
- `frontend/src/components/WeatherDashboard.js` - Main component
- `frontend/src/components/SearchBar.js` - Search input
- `frontend/src/components/WeatherCard.js` - Weather display
- `frontend/src/components/ErrorMessage.js` - Error handling
- Each component has its own CSS file for styling

## 🎯 What This Application Demonstrates

✅ Full-stack development (Backend + Frontend)  
✅ RESTful API design  
✅ React component architecture  
✅ Error handling on both client and server  
✅ Request/response logging  
✅ Environment variable management  
✅ Responsive web design  
✅ Modern UI/UX practices  
✅ Code organization and comments  
✅ API integration (OpenWeatherMap)  

## 📚 Next Steps

After successfully running the application, you can:

1. **Modify the UI**: Edit CSS files in `frontend/src/components/`
2. **Add Features**: Implement 5-day forecast, geolocation, etc.
3. **Explore the Code**: Read through the well-commented source files
4. **Check the Logs**: See how requests are being logged
5. **Test Error Handling**: Try various invalid inputs

## 💡 Pro Tips

- Keep both terminals visible so you can see any errors
- Check the browser's Developer Console (F12) for frontend errors
- Check the backend terminal for server-side errors
- The logs folder is automatically created when you start the backend
- All environment files (`.env`) are gitignored for security

## 🆘 Still Having Issues?

1. Review this guide step by step
2. Check the main README.md for more details
3. Verify all prerequisites are installed correctly
4. Make sure both terminals are running (backend and frontend)
5. Check that your API key is valid and active

---

**Congratulations! You've successfully set up the Weather Dashboard! 🎉**

Enjoy exploring weather data from around the world! 🌍☀️🌧️

