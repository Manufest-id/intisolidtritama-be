import { check } from "express-validator";
import { ALLOWED_CATEGORIES } from "../constants/categories";

export const projectValidator = [
  check("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isIn(ALLOWED_CATEGORIES)
    .withMessage("Invalid category"),

  check("client").trim().notEmpty().withMessage("Client is required"),

  check("location").trim().notEmpty().withMessage("Location is required"),

  check("service").trim().notEmpty().withMessage("Service is required"),

  check("year")
    .notEmpty()
    .withMessage("Year is required")
    .isInt({ min: 1900, max: 2100 })
    .withMessage("Year must be a valid number"),
];
