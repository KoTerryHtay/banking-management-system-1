"use client";

import CreateAccountForm from "@/components/accounts/create-account-form";
import DistrictPopoverMenu from "@/components/popover/district-popover";
import RegionPopoverMenu from "@/components/popover/region-popover";
import TownPopoverMenu from "@/components/popover/town-popover";
import TownshipPopoverMenu from "@/components/popover/township-popover";
import {
  DistrictInterface,
  RegionInterface,
  TownInterface,
  TownShipInterface,
} from "@/interfaces";

import React, { useState } from "react";

export default function CreateAccountPage() {
  const [region, setRegion] = useState<RegionInterface>();
  const [district, setDistrict] = useState<DistrictInterface>();
  const [township, setTownship] = useState<TownShipInterface>();
  const [town, setTown] = useState<TownInterface>();

  return (
    <div>
      <div className="flex items-center">
        <RegionPopoverMenu onRegion={setRegion} />
        {region?.Region_Id && (
          <DistrictPopoverMenu
            regionId={region?.Region_Id}
            onDistrict={setDistrict}
          />
        )}
        {district?.District_Id && (
          <TownshipPopoverMenu
            districtId={district.District_Id}
            onTownship={setTownship}
          />
        )}
        {township?.Township_Id && (
          <TownPopoverMenu townshipId={township.Township_Id} onTown={setTown} />
        )}
      </div>
      <div>
        {region?.Region_MMR_Name}-{district?.District_MMR_Name}-
        {township?.Township_MMR_Name}-{town?.Town_MMR_Name}
      </div>
      <div>{town?.Town_Id && <CreateAccountForm townId={town?.Town_Id} />}</div>
    </div>
  );
}
