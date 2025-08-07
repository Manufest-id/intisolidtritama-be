import express, { NextFunction } from "express";
import projectController from "../controllers/projectController";
import { validateCategory } from "../middlewares/validateCategory";
import { upload } from "../middlewares/uploadImage";
import { projectValidator } from "../middlewares/projectValidator";
import { validate } from "../middlewares/validate";
import { validateBodyCategory } from "../middlewares/validateBodyCategory";
import { verifyAdmin } from "../middlewares/auth";

const router = express.Router();

// Public Routes
// Route to get all projects
router.get("/", projectController.getAllProjects);

// Route to get projects by category with validation middleware
router.get(
  "/categories/:category",
  validateCategory,
  projectController.getProjectsByCategory
);

// Admin Routes
// Route to create a new project with validation and image upload
router.post(
  "/",
  verifyAdmin,
  upload.array("images", 5),
  validateBodyCategory,
  projectValidator,
  validate,
  projectController.createProject
);

// Route to update a project
router.put(
  "/:id",
  verifyAdmin,
  upload.array("images"),
  projectValidator,
  validate,
  projectController.updateProject
);

// Delete a project
router.delete("/:id", verifyAdmin, projectController.deleteProject);

export default router;
