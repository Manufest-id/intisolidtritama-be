import express from "express";
import path from "path";
import cors from "cors";
const morgan = require("morgan");
import projectRoutes from "./routes/projectRoutes";
import authRoutes from "./routes/authRoutes";
import { verifyAdmin } from "./middlewares/auth";

const app = express();
const PORT = process.env.PORT || 5009;

app.use(express.json());
// CORS middleware before your routes
app.use(
  cors({
    origin: [
      "http://localhost:5173", // your Vite frontend
      "http://localhost:8080", // your dev frontend (like Vue, webpack, etc)
      "https://camel-sweet-lionfish.ngrok-free.app", // your deployed panel (optional)
    ],
    credentials: true, // allow cookies or headers to pass
  })
);

app.use(morgan("dev"));

// Serve static files
app.use(
  "/images",
  express.static(path.join(__dirname, "../public/images"), {
    setHeaders: (res) => {
      res.set(
        "Access-Control-Allow-Origin",
        "https://camel-sweet-lionfish.ngrok-free.app"
      );
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

// Auth Routes
app.use("/api/auth", authRoutes);

// CRUD operations for projects
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
