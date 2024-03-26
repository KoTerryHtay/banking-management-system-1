import data from "../../data/Banking-Management-System.json";

export function getRegion() {
  const regions = data.Region.map((regions) => regions);

  return { regions };
}

export function getDistrict(regionId: string) {
  const districts = data.District.filter(
    (districts) => districts.Region_Id === regionId
  );

  return { districts };
}

export function getTownship(districtId: string) {
  const townships = data.TownShip.filter(
    (township) => township.District_Id === districtId
  );

  return { townships };
}

export function getTown(townshipId: string) {
  const towns = data.Town.filter((towns) => towns.Township_Id === townshipId);

  return { towns };
}

export function getTownById(townId: string) {
  const town = data.Town.find((town) => town.Town_Id === townId);

  const notFoundTown = !town;

  return { town, notFoundTown };
}

export function extractDate(time: Date) {
  return time.toISOString().split("T")[0];
}
