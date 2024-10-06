import app from "./app.js";
import dotenv from "dotenv";
import connectionToDB from "./config/dbConnection.js";

dotenv.config();

const PORT = process.env.PORT || 5010;

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
