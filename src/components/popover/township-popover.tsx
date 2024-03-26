"use client";

import { TownShipInterface } from "@/interfaces";
import { getTownship } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";

export default function TownshipPopoverMenu({
  districtId,
  onTownship,
}: {
  districtId: string;
  onTownship: (township: TownShipInterface) => void;
}) {
  const { townships } = getTownship(districtId);
  const [buttonName, setButtonName] = useState("Select Township");
  const [isOpen, setIsOpen] = useState(false);

  function onAction(township: TownShipInterface) {
    setButtonName(township.Township_MMR_Name ?? "select");
    onTownship(township);
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
          {townships.map((township) => (
            <div
              className="m-1 p-1 rounded-md bg-[#3282B8] hover:cursor-pointer text-[#1B262C] hover:text-white"
              key={township.Township_Id}
              onClick={() => onAction(township)}
            >
              {township.Township_MMR_Name}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
