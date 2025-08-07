import { Request, Response, NextFunction } from "express";
import { ALLOWED_CATEGORIES } from "../constants/categories";

export const validateBodyCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const raw = req.body?.category;
  const category = raw?.trim().toLowerCase();

  if (!category) {
    return res.status(400).json({
      errors: [
        {
          field: "category",
          message: "Category is required",
        },
      ],
    });
  }

  const isValid = ALLOWED_CATEGORIES.includes(category);

  if (!isValid) {
    return res.status(400).json({
      errors: [
        {
          field: "category",
          message: "Invalid category",
        },
      ],
    });
  }

  req.body.category = category;
  next();
};
