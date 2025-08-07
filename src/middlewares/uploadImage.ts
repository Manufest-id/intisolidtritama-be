import multer from "multer";
import path from "path";
import fs from "fs";

// Allowed file settings
const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png"];
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png"];

// Disk storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const rawCategory = req.body.category;
    const category = rawCategory?.trim().toLowerCase();

    const targetDir = path.join(process.cwd(), "public/images", category);
    fs.mkdirSync(targetDir, { recursive: true });

    console.log("Resolved target directory:", targetDir);
    cb(null, targetDir);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// File filter for safety
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const isAllowedMime = ALLOWED_MIME_TYPES.includes(file.mimetype);
  const isAllowedExt = ALLOWED_EXTENSIONS.includes(ext);

  if (!isAllowedMime || !isAllowedExt) {
    return cb(new Error("Only JPG, JPEG, and PNG files are allowed."));
  }

  cb(null, true);
};

// Multer upload instance
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: FILE_SIZE_LIMIT },
});
