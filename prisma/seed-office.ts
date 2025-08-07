import { PrismaClient, Category } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.project.create({
    data: {
      client: "PT BFI Finance Indonesia",
      location: "BSD, Tangerang",
      service: "Interior Works",
      year: 2017,
      category: Category.office,
      images: {
        create: [
          { url: "/images/office/porto-bfi-1.png" },
          { url: "/images/office/porto-bfi-2.png" },
          { url: "/images/office/porto-bfi-3.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Adi Kencana",
      location: "Jakarta, SCBD, District 8",
      service: "Design & Interior Works",
      year: 2018,
      category: Category.office,
      images: {
        create: [
          { url: "/images/office/porto-adikencana-1.png" },
          { url: "/images/office/porto-adikencana-2.png" },
          { url: "/images/office/porto-adikencana-3.png" },
          { url: "/images/office/porto-adikencana-6.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Bank Central Asia TBK",
      location: "Jalan Riau, Bandung",
      service: "Interior Works",
      year: 2021,
      category: Category.office,
      images: {
        create: [
          { url: "/images/office/porto-bca-1.png" },
          { url: "/images/office/porto-bca-2.png" },
          { url: "/images/office/porto-bca-3.png" },
          { url: "/images/office/porto-bca-4.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT Penerbit Erlangga",
      location: "Prosperity Tower, SCBD - Jakarta",
      service: "Interior Works",
      year: 2024,
      category: Category.office,
      images: {
        create: [
          { url: "/images/office/porto-erlangga-1.png" },
          { url: "/images/office/porto-erlangga-2.png" },
          { url: "/images/office/porto-erlangga-3.png" },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      client: "PT OS Selnajaya",
      location: "Jalan Ahmad Yani, Bandung",
      service: "Design & Interior Works",
      year: 2018,
      category: Category.office,
      images: {
        create: [
          { url: "/images/office/porto-selnajaya-1.png" },
          { url: "/images/office/porto-selnajaya-2.png" },
          { url: "/images/office/porto-selnajaya-3.png" },
          { url: "/images/office/porto-selnajaya-3.png" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding office data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
