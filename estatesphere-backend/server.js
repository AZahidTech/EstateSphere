// server.js
import 'dotenv/config';             
import app from './src/app.js';    
import connectDB from './src/db/db.js'; 

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});