// server.js
import 'dotenv/config';             // Loads environment variables
import app from './src/app.js';     // ⚠️ add .js extension
import connectDB from './src/db/db.js'; // ⚠️ add .js extension

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});