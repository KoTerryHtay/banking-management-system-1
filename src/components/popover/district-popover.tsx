"use client";

import { DistrictInterface } from "@/interfaces";
import { getDistrict } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";

export default function DistrictPopoverMenu({
  regionId,
  onDistrict,
}: {
  regionId: string;
  onDistrict: (district: DistrictInterface) => void;
}) {
  const { districts } = getDistrict(regionId);
  const [buttonName, setButtonName] = useState("Select District");
  const [isOpen, setIsOpen] = useState(false);

  function onAction(district: DistrictInterface) {
    setButtonName(district.District_MMR_Name ?? "select");
    onDistrict(district);
    setIsOpen(false);
  }

  return (
    <Popover
      placement="bottom-start"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <div className="bg-[#0F4C75] m-1 px-4 py-2 rounded-xl text-white hover:cursor-pointer">
          {buttonName}
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-[#0F4C75]">
        <div className="flex flex-wrap m-1 ">
          {districts.map((district) => (
            <div
              className="m-1 p-1 rounded-md bg-[#3282B8] hover:cursor-pointer text-[#1B262C] hover:text-white"
              key={district.District_Id}
              onClick={() => onAction(district)}
            >
              {district.District_MMR_Name}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
