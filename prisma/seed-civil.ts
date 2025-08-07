import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "PT Bhineka Sangkuriang Transport",
      location: "Cirebon",
      service: "Civil Works",
      year: 2025,
      category: Category.civil,
      images: {
        create: [
          { url: "/images/civil/porto-bhineka-1.png" },
          { url: "/images/civil/porto-bhineka-3.png" },
          { url: "/images/civil/porto-bhineka-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Tri Mandiri Sejati",
      location: "Samarinda",
      service: "Civil Works",
      year: 2019,
      category: Category.civil,
      images: {
        create: [
          { url: "/images/civil/porto-daihatsu-1.png" },
          { url: "/images/civil/porto-daihatsu-2.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "Pontianak City Government",
      location: "Pontianak",
      service: "Civil Works",
      year: 2015,
      category: Category.civil,
      images: {
        create: [{ url: "/images/civil/porto-pontianak.png" }],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding civil data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
