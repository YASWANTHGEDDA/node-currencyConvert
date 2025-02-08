const express = require("express");
const router = express.Router(); // ✅ Correct way to define router

const { createTask, getTask, getTaskById, updateTask, deleteTask } = require("../controller/taskControl"); // ✅ Correct import

// Define routes
router.get("/", getTask);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router; 