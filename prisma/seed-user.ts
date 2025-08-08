import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function main() {
  const plainPassword = "int1s0l1durbnu@!t";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { username: "ist-282741@admin" },
    update: {
      password: hashedPassword,
    },
    create: {
      username: "ist-282741@admin",
      password: hashedPassword,
      // 🧩 Add any other required fields here:
      // e.g. name: "Admin", role: "superadmin"
    },
  });

  console.log("✅ Admin seeded/updated:", admin.username);
}

if (require.main === module) {
  main()
    .catch((err) => {
      console.error("❌ Error seeding admin:", err);
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
