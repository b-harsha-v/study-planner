import express from "express";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


// Task routes
app.use("/api/tasks", taskRoutes);

export default app;
