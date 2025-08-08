import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function main() {
  const plainPassword = "int1s0l1durbnu@!t";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const existing = await prisma.admin.findUnique({
    where: { username: "ist-282741@admin" },
  });

  if (existing) {
    const updated = await prisma.admin.update({
      where: { username: "ist-282741@admin" },
      data: { password: hashedPassword },
    });

    console.log("✅ Admin password updated:", updated.username);
  } else {
    console.warn("⚠️ Admin not found. Skipping update.");
  }
}

if (require.main === module) {
  main()
    .catch((err) => {
      console.error("❌ Error updating admin:", err);
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
