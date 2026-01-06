import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
