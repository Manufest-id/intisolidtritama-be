import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_admin_key";

export default {
  login: async (req: Request, res: Response) => {
    console.log("Request body:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password required" });
    }

    try {
      const admin = await prisma.admin.findUnique({ where: { username } });
      if (!admin) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      // 🔍 Add debug logs here
      //   console.log("Plain password:", password);
      //   console.log("Hashed password", admin.password);

      const valid = await bcrypt.compare(password, admin.password);
      //   console.log("Password valid:", valid);
      if (!valid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.json({ token });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  logout: async (_req: Request, res: Response) => {
    // Since JWT is stateless, just tell client to delete token
    return res.status(200).json({
      message: "Logged out successfully. Please delete token on client.",
    });
  },
};
