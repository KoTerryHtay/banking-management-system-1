import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar className="shadow bg-[#1B262C]">
      <NavbarBrand className="text-white font-bold text-2xl">
        <Link href={"/"}>Bank</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="m-1 p-1">
          <Link
            href={"/create"}
            className="bg-[#0F4C75] text-white font-semibold p-2 rounded-md m-1"
          >
            Create Account
          </Link>
          <Link
            href={"/history"}
            className="bg-[#0F4C75] text-white font-semibold p-2  rounded-md m-1"
          >
            History
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
