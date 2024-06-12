import express from "express";
import { newTask, getMytask, updateTask, deleteTask } from "../controllers/task.js";
import { isAuthenticates } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticates ,newTask);

router.get("/my", isAuthenticates ,getMytask);

router.route("/:id").put(isAuthenticates ,updateTask).delete(isAuthenticates ,deleteTask);

export default router;