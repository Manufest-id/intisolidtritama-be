import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const plainPassword = "int1s0l1durbnu@!t";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const updated = await prisma.admin.update({
    where: { username: "ist-282741@admin" },
    data: { password: hashedPassword },
  });

  console.log("✅ Admin password updated successfully:", updated.username);
}

main()
  .catch((err) => {
    console.error("❌ Error updating admin:", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });