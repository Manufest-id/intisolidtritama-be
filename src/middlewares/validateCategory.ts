import { Request, Response, NextFunction } from "express";
import { ALLOWED_CATEGORIES } from "../constants/categories";

export const validateCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rawCategory = req.params.category?.toLowerCase();
  const validCategory = ALLOWED_CATEGORIES.find((cat) => cat === rawCategory);

  if (!validCategory) {
    return res.status(400).json({ error: "Invalid category" });
  }

  req.params.category = validCategory;
  next();
};
