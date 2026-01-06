import Task from "../models/Task.js";

/**
 * Create a new task
 */
export const createTask = async (req, res) => {
  const { title, description, dueAt, priority } = req.body;

  const task = await Task.create({
    userId: req.user.id,
    title,
    description,
    dueAt,
    priority
  });

  res.status(201).json(task);
};

/**
 * Get all tasks for logged-in user
 */
export const getTasks = async (req, res) => {
  const now = new Date();

  const tasks = await Task.find({ userId: req.user.id }).sort({ dueAt: 1 });

  // Lazy overdue correction
  for (const task of tasks) {
    if (task.status === "PENDING" && now > task.dueAt) {
      task.status = "LATE";
      await task.save();
    }
  }

  res.json(tasks);
};
