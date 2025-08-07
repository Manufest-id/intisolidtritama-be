import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "Bumbu Desa",
      location: "Margo City, Bekasi",
      service: "Interior Works",
      year: 2009,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-bumbudesa-1.png" },
          { url: "/images/restaurant/porto-bumbudesa-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Loe Cuan Duluan",
      location: "AEON Mall, Jakarta Garden City",
      service: "Interior Design & Interior Works",
      year: 2017,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-loecuan-1.png" },
          { url: "/images/restaurant/porto-loecuan-2.png" },
          { url: "/images/restaurant/porto-loecuan-3.png" },
          { url: "/images/restaurant/porto-loecuan-6.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Ta Wan / Eatwell Culinary Group",
      location: "Bandung",
      service: "Interior",
      year: 2022,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-tawan_2-1.png" },
          { url: "/images/restaurant/porto-tawan_2-2.png" },
          { url: "/images/restaurant/porto-tawan-1.png" },
          { url: "/images/restaurant/porto-tawan-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Coffee Chuseyo",
      location: "Serang Banten",
      service: "Interior",
      year: 2022,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-chuseyo-1.png" },
          { url: "/images/restaurant/porto-chuseyo-2.png" },
          { url: "/images/restaurant/porto-chuseyo-3.png" },
          { url: "/images/restaurant/porto-chuseyo-4.png" },
          { url: "/images/restaurant/porto-chuseyo-5.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Dapur Solo",
      location: "Cihamplas Walk",
      service: "Interior",
      year: 2022,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-dapursolo-1.png" },
          { url: "/images/restaurant/porto-dapursolo-2.png" },
          { url: "/images/restaurant/porto-dapursolo-3.png" },
          { url: "/images/restaurant/porto-dapursolo-4.png" },
          { url: "/images/restaurant/porto-dapursolo-5.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Ichiban Sushi",
      location: "Citimall, Bontang",
      service: "Interior",
      year: 2023,
      category: Category.restaurant,
      images: {
        create: [
          { url: "/images/restaurant/porto-ichiban-1.png" },
          { url: "/images/restaurant/porto-ichiban-2.png" },
          { url: "/images/restaurant/porto-ichiban-3.png" },
          { url: "/images/restaurant/porto-ichiban-4.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding restaurant data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
