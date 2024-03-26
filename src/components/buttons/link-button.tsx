import Link from "next/link";

export default function LinkButton({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={link}
      className="bg-[#0F4C75] text-white font-semibold px-28 p-3 r rounded-lg"
    >
      {children}
    </Link>
  );
}
