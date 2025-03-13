require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// Check if PORT is defined
if (!PORT) {
  console.error("❌ PORT is not defined in .env file!");
  process.exit(1); 
}

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
