import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "PT Daya Adicipta Motora",
      location: "Bandung dan Cimahi",
      service: "Interior & Exterior Works",
      year: 2017,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-adicipta-1.png" },
          { url: "/images/showroom/porto-adicipta-2.png" },
          { url: "/images/showroom/porto-adicipta-3.png" },
          { url: "/images/showroom/porto-adicipta-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Asco Dwi Mobilindo",
      location: "Rancaekek, Bandung",
      service: "Interior & Interior Works",
      year: 2015,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-asco-1.png" },
          { url: "/images/showroom/porto-asco-2.png" },
          { url: "/images/showroom/porto-asco-3.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Asia Surya Perkasa",
      location: "Pangkal Pinang",
      service: "Interior Works",
      year: 2018,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-asiasurya-1.png" },
          { url: "/images/showroom/porto-asiasurya-2.png" },
          { url: "/images/showroom/porto-asiasurya-3.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Wahanaartha Ritelindo",
      location: "Bintaro, Jatinegara & Tanah Tinggi",
      service: "Interior & Exterior Works",
      year: 2018,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-wahanaartha-1.png" },
          { url: "/images/showroom/porto-wahanaartha-2.png" },
          { url: "/images/showroom/porto-wahanaartha-3.png" },
          { url: "/images/showroom/porto-wahanaartha-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Isuzu Arta Motor Indonesia",
      location: "Cibubur",
      service: "Exterior Works",
      year: 2019,
      category: Category.showroom,
      images: {
        create: [{ url: "/images/showroom/porto-isuzu.png" }],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Karya Zirang Utama",
      location: "Tasikmalaya",
      service: "Interior & Exterior Works",
      year: 2019,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-karya-1.png" },
          { url: "/images/showroom/porto-karya-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Tunas Dwipa Matra",
      location: "Toboali",
      service: "Architecture & Interior Works",
      year: 2023,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-tunas-1.png" },
          { url: "/images/showroom/porto-tunas-2.png" },
          { url: "/images/showroom/porto-tunas-3.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Tri Mandiri Sejati",
      location: "Samarinda",
      service: "Architecture & Interior Works",
      year: 2021,
      category: Category.showroom,
      images: {
        create: [
          { url: "/images/showroom/porto-trimandiri-1.png" },
          { url: "/images/showroom/porto-trimandiri-2.png" },
          { url: "/images/showroom/porto-trimandiri-3.png" },
          { url: "/images/showroom/porto-trimandiri-4.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding showroom data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
