import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Bekasi",
      service: "Interior Works",
      year: 2013,
      category: Category.cinema,
      images: {
        create: [{ url: "/images/cinema/porto-prakarsa-bekasi.png" }],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Opi Mall, Palembang",
      service: "Interior Works",
      year: 2015,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-opimall-1.png" },
          { url: "/images/cinema/porto-prakarsa-opimall-2.png" },
          { url: "/images/cinema/porto-prakarsa-opimall-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "IP Mall, Palembang",
      service: "Interior Works",
      year: 2016,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-ipmall-1.png" },
          { url: "/images/cinema/porto-prakarsa-ipmall-2.png" },
          { url: "/images/cinema/porto-prakarsa-ipmall-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Suzuya, Medan",
      service: "Interior Works",
      year: 2016,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-suzuya-1.png" },
          { url: "/images/cinema/porto-prakarsa-suzuya-2.png" },
          { url: "/images/cinema/porto-prakarsa-suzuya-6.png" },
          { url: "/images/cinema/porto-prakarsa-suzuya-7.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Citi Mall, Bontang",
      service: "Interior Works",
      year: 2023,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-citimall-1.png" },
          { url: "/images/cinema/porto-prakarsa-citimall-2.png" },
          { url: "/images/cinema/porto-prakarsa-citimall-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Diana Mall, Timika",
      service: "Interior Works",
      year: 2024,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-dianamall-1.png" },
          { url: "/images/cinema/porto-prakarsa-dianamall-2.png" },
          { url: "/images/cinema/porto-prakarsa-dianamall-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Maleo Town Square, Mamuju",
      service: "Interior Works",
      year: 2024,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-maleotown-1.png" },
          { url: "/images/cinema/porto-prakarsa-maleotown-2.png" },
          { url: "/images/cinema/porto-prakarsa-maleotown-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Prakarsa Gunawan & Son",
      location: "Kupang",
      service: "Interior Works",
      year: 2024,
      category: Category.cinema,
      images: {
        create: [
          { url: "/images/cinema/porto-prakarsa-kupang-1.png" },
          { url: "/images/cinema/porto-prakarsa-kupang-2.png" },
          { url: "/images/cinema/porto-prakarsa-kupang-3.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding cinema data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
