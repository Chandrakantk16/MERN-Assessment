const express = require('express');
const connectDB = require('./config/db');  // Ensure this path is correct
const authRoutes = require('./routes/auth');  // Ensure this path is correct
const employRoutes = require('./routes/employees');  // Ensure this path is correct


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employRoutes);


const PORT = process.env.PORT || 5000;

// Corrected console.log to use backticks for template literals
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
