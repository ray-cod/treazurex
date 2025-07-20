const express = require('express')
const cors = require('cors')
const { logger } = require('./middlewares/logEvents')
const authRoutes = require('./routes/authRoutes')
const apiRoutes = require('./routes/apiRoutes')
const cookieParser = require('cookie-parser')
const passport = require("passport");
require("./config/passport");

const app = express()

const PORT = process.env.PORT || 3500

const whiteList = [process.env.CLIENT_URL, "http://localhost:3500"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
  optionsSuccessStatus: 200,
};

// custom middleware logger
app.use(logger);

// Cross origin ressource sharing
app.use(cors(corsOptions))

app.use(passport.initialize());
app.use(express.json())
app.use(cookieParser())

// to be removed root route
app.get('/', (req, res) => {
    res.send('Treazurex API is running');
});

// Authentication
app.use('/api', authRoutes)

// API routes
app.use('/api', apiRoutes)

// Quick error handler (To be removed)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
  


// Running server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))