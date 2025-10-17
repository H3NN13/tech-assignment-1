# Weather Dashboard Application

A full-stack weather dashboard application that fetches and displays real-time weather information for any city using the OpenWeatherMap API.

## 🌟 Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Comprehensive Details**: Temperature, humidity, pressure, wind speed, and weather conditions
- **Request Logging**: All API requests and responses are logged to a file with timestamps
- **Error Handling**: Graceful handling of invalid cities, API failures, and network errors
- **Modern UI**: Beautiful, responsive interface with gradient backgrounds and smooth animations
- **Separate Frontend/Backend**: Clean separation of concerns with dedicated frontend and backend applications

## 📁 Project Structure

```
talentx-tech-ass-1/
├── backend/           # Node.js/Express backend API
│   ├── server.js      # Main server file
│   ├── logs/          # API request logs (created automatically)
│   ├── package.json
│   ├── env.example    # Environment variable template
│   └── README.md
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   ├── env.example
│   └── README.md
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your account dashboard
4. Note: It may take a few minutes for the API key to activate

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from template
cp env.example .env

# Edit .env and add your OpenWeatherMap API key
# OPENWEATHER_API_KEY=your_actual_api_key_here
```

**Start the backend server:**
```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# (Optional) Create .env file if backend runs on different port
cp env.example .env
```

**Start the frontend application:**
```bash
npm start
```

The frontend will open automatically at `http://localhost:3000`

## 🎯 How to Use

1. Make sure both backend and frontend servers are running
2. Open your browser to `http://localhost:3000`
3. Enter a city name (e.g., "London", "New York", "Tokyo")
4. Click "Search" or press Enter
5. View the weather information displayed on the dashboard

## 🔧 Technology Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Axios**: HTTP client for API requests
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **Morgan**: HTTP request logger

### Frontend
- **React**: UI library
- **Create React App**: Project setup and build tools
- **CSS3**: Styling with modern features (Grid, Flexbox, Animations)
- **Fetch API**: HTTP requests to backend

## 📝 API Endpoints

### Backend API

**Base URL:** `http://localhost:5000`

#### GET /api/weather
Fetch weather data for a city.

**Query Parameters:**
- `city` (required): Name of the city

**Example:**
```
GET http://localhost:5000/api/weather?city=London
```

**Success Response (200):**
```json
{
  "city": "London",
  "country": "GB",
  "temperature": 15.5,
  "feelsLike": 14.2,
  "humidity": 72,
  "pressure": 1013,
  "weather": "Clouds",
  "description": "scattered clouds",
  "icon": "03d",
  "windSpeed": 3.5,
  "clouds": 40
}
```

**Error Responses:**
- `400`: Missing or invalid city parameter
- `404`: City not found
- `500`: Server error
- `503`: Weather service unavailable

#### GET /api/health
Health check endpoint.

**Example Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-17T12:00:00.000Z"
}
```

## 📊 Logging

All API requests and responses are logged to `backend/logs/api-requests.log` with the following format:

```
[2025-10-17T12:00:00.000Z] City: London | Status: 200 | Message: Success
[2025-10-17T12:01:30.000Z] City: InvalidCity | Status: 404 | Message: City 'InvalidCity' not found
```

Each log entry includes:
- ISO timestamp
- City name requested
- HTTP status code
- Success/error message

## ⚠️ Error Handling

The application handles various error scenarios:

### Frontend Errors
- Empty city input validation
- Backend server not running
- Network connection failures
- Invalid API responses
- Display user-friendly error messages

### Backend Errors
- Missing or invalid city names (400)
- City not found (404)
- Missing API key configuration (500)
- OpenWeatherMap API failures (503)
- Network timeouts and failures

All errors are logged and return appropriate HTTP status codes with descriptive messages.

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Gradient Backgrounds**: Purple gradient theme
- **Smooth Animations**: Loading spinners, card animations, error shakes
- **Weather Icons**: Official OpenWeatherMap icons
- **Loading States**: Visual feedback during API calls
- **Empty States**: Helpful messages when no data is displayed

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full layout
- **Tablet**: 481px - 768px - Adjusted spacing
- **Mobile**: ≤ 480px - Stacked layout, full-width elements

## 🧪 Testing the Application

### Test Cases

1. **Valid City Search**
   - Enter "London" → Should display weather data

2. **Invalid City**
   - Enter "InvalidCityName123" → Should show "City not found" error

3. **Empty Input**
   - Click search without entering a city → Should show "Please enter a city name" error

4. **Backend Not Running**
   - Stop backend server, try search → Should show connection error

5. **Multiple Searches**
   - Search multiple cities in sequence → Should update data correctly

6. **Responsive Design**
   - Resize browser window → UI should adapt to different screen sizes

## 🔒 Security Considerations

- API key stored in environment variables (not committed to Git)
- CORS enabled for frontend-backend communication
- Input validation on both frontend and backend
- Error messages don't expose sensitive information

## 📄 Requirements Met

✅ **Requirement 1**: Modern JavaScript framework (React) for frontend  
✅ **Requirement 2**: Node.js with Express.js backend  
✅ **Requirement 3**: Well-organized, readable code with comments  
✅ **Assessment**: Correct implementation, proper error handling, code organization

### Additional Features Implemented
- Comprehensive request/response logging with timestamps
- Separate frontend and backend folders as requested
- Beautiful, modern UI with excellent UX
- Fully responsive design
- Detailed documentation

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is already in use
- Verify `.env` file exists and contains valid API key
- Run `npm install` to ensure dependencies are installed

### Frontend won't connect to backend
- Verify backend is running on port 5000
- Check browser console for CORS errors
- Ensure `REACT_APP_API_URL` in `.env` matches backend URL

### API key errors
- Verify API key is active (may take a few minutes after creation)
- Check for typos in `.env` file
- Ensure no extra spaces around the API key

### "City not found" errors
- Try different city name formats (e.g., "New York" vs "New York City")
- Use major cities for testing (London, Paris, Tokyo)
- Check spelling of city name

## 📚 Further Development

Potential enhancements:
- Weather forecast for upcoming days
- Geolocation to auto-detect user's city
- Search history/favorites
- Temperature unit toggle (Celsius/Fahrenheit)
- More detailed weather information
- Data caching to reduce API calls
- Rate limiting for API protection
- User authentication
- Database for storing search history

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the README files in backend/ and frontend/ directories
3. Verify all setup steps were completed correctly
4. Check the logs in `backend/logs/api-requests.log`

## 📝 License

This project is created for educational purposes as part of a technical assessment.

---

**Built with ❤️ using React and Node.js**

