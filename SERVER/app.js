import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/ping", (req, res) => {
  res.send("PONG");
});

//* Routes for user module
app.use("/api/v1/user", userRoutes);

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

app.use(errorMiddleware);

export default app;
