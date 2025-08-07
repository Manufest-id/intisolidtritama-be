import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "Hotal Cemerlang",
      location: "Bandung",
      service: "Interior Works & Furniture Works",
      year: 2012, // You can only store one year, so we pick the start year
      category: Category.hotel,
      images: {
        create: [
          { url: "/images/hotel/porto-cemerlang_2-1.png" },
          { url: "/images/hotel/porto-cemerlang_2-2.png" },
          { url: "/images/hotel/porto-cemerlang_2-3.png" },
          { url: "/images/hotel/porto-cemerlang_2-4.png" },
          { url: "/images/hotel/porto-cemerlang_2-5.png" },
          { url: "/images/hotel/porto-cemerlang_2-6.png" },
          { url: "/images/hotel/porto-cemerlang_2-7.png" },
          { url: "/images/hotel/porto-cemerlang_2-8.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Fave Hotel",
      location: "Braga, Bandung",
      service: "Interior Works",
      year: 2012,
      category: Category.hotel,
      images: {
        create: [
          { url: "/images/hotel/porto-fave-1.png" },
          { url: "/images/hotel/porto-fave-2.png" },
          { url: "/images/hotel/porto-fave-3.png" },
          { url: "/images/hotel/porto-fave-4.png" },
          { url: "/images/hotel/porto-fave-5.png" },
          { url: "/images/hotel/porto-fave-6.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Mr. Gusman",
      location: "Bali, Nusa Dua",
      service: "Interior Design & Furniture Works",
      year: 2014,
      category: Category.hotel,
      images: {
        create: [
          { url: "/images/hotel/porto-gusman-1.png" },
          { url: "/images/hotel/porto-gusman-2.png" },
          { url: "/images/hotel/porto-gusman-3.png" },
          { url: "/images/hotel/porto-gusman-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Tritunggal Lestari Makmur",
      location: "Pullman Hotel, Bandung",
      service: "Interior Works",
      year: 2020,
      category: Category.hotel,
      images: {
        create: [
          { url: "/images/hotel/porto-tritunggal-1.png" },
          { url: "/images/hotel/porto-tritunggal-2.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding hotel data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
