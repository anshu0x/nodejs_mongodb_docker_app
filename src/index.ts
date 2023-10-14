import express from "express";
import 'dotenv/config'; // Import and configure environment variables
import connectDB from "./db/connection";
import UsersRouter from './routes/User.route';

async function init() {
  const app = express(); // Create an Express application
  const PORT = Number(process.env.PORT) || 8000;
  
  app.use(express.json()); // Add middleware for JSON parsing
  
  app.get("/", (_req, res) => {
    res.json({ message: "Server is up and running" }); // Set up a root route or a default response
  });
  app.use('/api', UsersRouter); // Define and use your routes
  
  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`)); // Start the server
}

connectDB(); // Connect to the database
init();
