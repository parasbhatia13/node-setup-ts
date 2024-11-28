
import express from "express"; // Express framework for creating the server
import { PORT } from './utils/envConstants'; 
import * as bodyParser from 'body-parser'; // Body parser for parsing request bodies
import cookieParser from 'cookie-parser'; // Cookie parser middleware
import * as dotenv from "dotenv"; // dotenv for loading environment variables
import cors from 'cors'; // CORS middleware for handling cross-origin requests
import connectToMongoDB from "./utils/dbConnect"; // Function to connect to MongoDB
import routes from "./routes/index"; // Import routes

// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse request bodies as JSON (redundant with express.json, but can be kept for compatibility)
app.use(bodyParser.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Define the port to use (from environment variables or default to 8080)
const port = PORT || 8080;

// Configure CORS settings
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow only the origin specified in the environment variable
    credentials: true, // Allow credentials such as cookies and authentication headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers in requests
}));

// Connect to MongoDB database
connectToMongoDB();

// Set up routes under the "/api" path
app.use("/api", routes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Log message indicating the server is running
});

// Export the app instance for potential use in testing or other contexts
export default app;
