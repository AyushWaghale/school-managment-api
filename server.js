require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// Ensure PORT is correctly loaded
if (!PORT) {
  console.error("❌ PORT is not defined in .env file!");
  process.exit(1); // Stop the server if PORT is missing
}

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
