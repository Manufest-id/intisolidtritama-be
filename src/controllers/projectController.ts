import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";

export default {
  getAllProjects: async (req: Request, res: Response) => {
    try {
      const projects = await prisma.project.findMany({
        include: { images: true },
        orderBy: { year: "desc" },
      });
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getProjectsByCategory: async (req: Request, res: Response) => {
    const { category } = req.params;

    // Validate if it's a valid enum value
    if (!Object.values(Category).includes(category as Category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    try {
      const projects = await prisma.project.findMany({
        where: { category: category as Category },
        include: { images: true },
        orderBy: { year: "desc" },
      });
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects by category:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createProject: async (req: Request, res: Response) => {
    try {
      const { category, client, location, service, year } = req.body;
      const imageFiles = req.files as Express.Multer.File[];

      // Reject if no images uploaded
      if (!imageFiles || imageFiles.length === 0) {
        return res.status(400).json({
          errors: [
            {
              field: "images",
              message: "At least one image is required",
            },
          ],
        });
      }

      const categorySlug = category.trim().toLowerCase();

      const newProject = await prisma.project.create({
        data: {
          category: categorySlug as Category,
          client: client.trim(),
          location: location.trim(),
          service: service.trim(),
          year: parseInt(year),
          images: {
            create: imageFiles.map((file) => ({
              url: `/images/${categorySlug}/${file.filename}`,
            })),
          },
        },
        include: { images: true },
      });

      res.status(201).json(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  //   Update project
  updateProject: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    // Validate ID
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const { category, client, location, service, year } = req.body;
      const imageFiles = req.files as Express.Multer.File[];

      const categorySlug = category.trim().toLowerCase();

      // Validate category
      if (!Object.values(Category).includes(categorySlug as Category)) {
        return res.status(400).json({ error: "Invalid category" });
      }

      // 1. Fetch existing project
      const existingProject = await prisma.project.findUnique({
        where: { id },
        include: { images: true },
      });

      if (!existingProject) {
        return res.status(404).json({ error: "Project not found" });
      }

      let imageData = undefined;

      // 2. If new images uploaded, replace old ones
      if (imageFiles && imageFiles.length > 0) {
        // Delete old image files from filesystem
        for (const image of existingProject.images) {
          const filePath = path.join(process.cwd(), "public", image.url);
          try {
            await fs.unlink(filePath);
          } catch (err) {
            console.warn(`⚠️ Failed to delete image file: ${filePath}`, err);
          }
        }

        // Delete image records from DB
        await prisma.image.deleteMany({ where: { projectId: id } });

        // Prepare new image data
        imageData = {
          create: imageFiles.map((file) => ({
            url: `/images/${categorySlug}/${file.filename}`,
          })),
        };
      }

      // 3. Update the project
      const updatedProject = await prisma.project.update({
        where: { id },
        data: {
          category: categorySlug as Category,
          client: client.trim(),
          location: location.trim(),
          service: service.trim(),
          year: parseInt(year),
          ...(imageData && { images: imageData }),
        },
        include: { images: true },
      });

      res.status(200).json(updatedProject);
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  //   Delete project
  deleteProject: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    // ✅ Validate ID first
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      // 1. Fetch project with its images
      const project = await prisma.project.findUnique({
        where: { id },
        include: { images: true },
      });

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      // 2. Delete associated image files
      for (const image of project.images) {
        const filePath = path.join(process.cwd(), "public", image.url);
        try {
          await fs.unlink(filePath); // delete file
        } catch (err) {
          console.warn(`⚠️ Failed to delete image file: ${filePath}`, err);
        }
      }

      // 3. Delete project (Image rows will be cascade deleted)
      await prisma.project.delete({ where: { id } });

      res
        .status(200)
        .json({ message: "Project and images deleted successfully" });
    } catch (error) {
      console.error("Error deleting project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
