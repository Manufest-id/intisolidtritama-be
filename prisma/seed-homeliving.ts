import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "Bpk. Suud",
      location: "Serang, Banten",
      service: "Design & House Construction",
      year: 2021,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-suud-1.png" },
          { url: "/images/homeliving/porto-suud-2.png" },
          { url: "/images/homeliving/porto-suud-3.png" },
          { url: "/images/homeliving/porto-suud-6.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Mr. Rudi",
      location: "Batu Nunggal, Bandung",
      service: "House Construction",
      year: 2015,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-rudi-1.png" },
          { url: "/images/homeliving/porto-rudi-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Bpk. Hans",
      location: "Sunter, Jakarta",
      service: "Design & House Construction",
      year: 2016,
      category: Category.homeliving,
      images: {
        create: [{ url: "/images/homeliving/porto-hans.png" }],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Bpk. Jun",
      location: "Tanjung Duren, Jakarta",
      service: "Design & House Construction",
      year: 2023,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-jun-1.png" },
          { url: "/images/homeliving/porto-jun-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Bu Kris",
      location: "Taman Kopo, Bandung",
      service: "Interior Design & Works",
      year: 2024,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-kris-1.png" },
          { url: "/images/homeliving/porto-kris-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Bu Kikit",
      location: "Setra Murni, Bandung",
      service: "Design & Construction",
      year: 2024,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-kikit-1.png" },
          { url: "/images/homeliving/porto-kikit-2.png" },
          { url: "/images/homeliving/porto-kikit-3.png" },
          { url: "/images/homeliving/porto-kikit-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Mr. Johan",
      location: "Bogor",
      service: "House Construction",
      year: 2024,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-johan-1.png" },
          { url: "/images/homeliving/porto-johan-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Jaya Property",
      location: "Windel Rio, Bogor",
      service: "House Construction",
      year: 2024,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-jaya-1.png" },
          { url: "/images/homeliving/porto-jaya-2.png" },
          { url: "/images/homeliving/porto-jaya-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Bpk Julianto",
      location: "Budisari, Bandung",
      service: "Furniture Works",
      year: 2021,
      category: Category.homeliving,
      images: {
        create: [{ url: "/images/homeliving/porto-julianto.png" }],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Ibu Ijte",
      location: "Setia Budi Regency, Bandung",
      service: "Design & House Construction",
      year: 2020,
      category: Category.homeliving,
      images: {
        create: [
          { url: "/images/homeliving/porto-ijte-1.png" },
          { url: "/images/homeliving/porto-ijte-2.png" },
          { url: "/images/homeliving/porto-ijte-3.png" },
          { url: "/images/homeliving/porto-ijte-4.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding homeliving data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
