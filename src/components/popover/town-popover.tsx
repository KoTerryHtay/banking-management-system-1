"use client";

import { TownInterface } from "@/interfaces";
import { getTown } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";

export default function TownPopoverMenu({
  townshipId,
  onTown,
}: {
  townshipId: string;
  onTown: (township: TownInterface) => void;
}) {
  const { towns } = getTown(townshipId);
  const [buttonName, setButtonName] = useState("Select Town");
  const [isOpen, setIsOpen] = useState(false);

  function onAction(town: TownInterface) {
    setButtonName(town.Town_MMR_Name);
    onTown(town);
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
          {towns.map((town) => (
            <div
              className="m-1 p-1 rounded-md bg-[#3282B8] hover:cursor-pointer text-[#1B262C] hover:text-white"
              key={town.Town_Id}
              onClick={() => onAction(town)}
            >
              {town.Town_MMR_Name}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
