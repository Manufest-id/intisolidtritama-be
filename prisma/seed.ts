import { main as seedCinema } from "./seed-cinema";
import { main as seedCivil } from "./seed-civil";
import { main as seedHomeliving } from "./seed-homeliving";
import { main as seedHotel } from "./seed-hotel";
import { main as seedOffice } from "./seed-office";
import { main as seedRestaurant } from "./seed-restaurant";
import { main as seedShowroom } from "./seed-showroom";

async function main() {
  console.log("Seeding...");
  await seedCinema();
  await seedCivil();
  await seedHomeliving();
  await seedHotel();
  await seedOffice();
  await seedRestaurant();
  await seedShowroom();
  console.log("✅ Done seeding.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
