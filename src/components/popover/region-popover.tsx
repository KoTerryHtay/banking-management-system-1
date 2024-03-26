"use client";

import { RegionInterface } from "@/interfaces";
import { getRegion, getTownship } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";

export default function RegionPopoverMenu({
  onRegion,
}: {
  onRegion: (region: RegionInterface) => void;
}) {
  const { regions } = getRegion();
  const [buttonName, setButtonName] = useState("Select Region");
  const [isOpen, setIsOpen] = useState(false);

  function onAction(region: RegionInterface) {
    setButtonName(region.Region_MMR_Name ?? "select");
    onRegion(region);
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
          {regions.map((region) => (
            <div
              className="m-1 p-1 rounded-md bg-[#3282B8] hover:cursor-pointer text-[#1B262C] hover:text-white"
              key={region.Region_Id}
              onClick={() => onAction(region)}
            >
              {region.Region_MMR_Name}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
