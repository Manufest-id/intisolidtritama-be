import express from "express";
import path from "path";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 5009;
const morgan = require("morgan");

const allowedOrigins = [
  "http://localhost:5173", // Public landing page frontend (dev)
  "http://localhost:8080", // Admin panel frontend (dev)
  "https://intisolidtritama.co.id", // Public landing page frontend (production)
  "https://admin.intisolidtritama.co.id", // Admin panel frontend (production)
];

app.use(express.json());

// CORS middleware before routes
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, false);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS policy: Not allowed by server"));
    },
    credentials: true,
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

// Restrict API usage to only allowed frontend sources
app.use((req, res, next) => {
  const origin = req.get("origin") || "";
  const referer = req.get("referer") || "";

  if (
    !allowedOrigins.some(
      (allowed) => origin.startsWith(allowed) || referer.startsWith(allowed)
    )
  ) {
    return res.status(403).json({ error: "Forbidden: Invalid origin" });
  }

  next();
});

// Auth Routes
app.use("/api/auth", authRoutes);

// CRUD operations for projects
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
