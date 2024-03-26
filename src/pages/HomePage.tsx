import LinkButton from "@/components/buttons/link-button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-3">
      <LinkButton link="/deposit">Deposit</LinkButton>
      <LinkButton link="/withdraw">Withdraw</LinkButton>
      <LinkButton link="/transfer">Transfer</LinkButton>
      <LinkButton link="/account-lists">Account Lists</LinkButton>
    </div>
  );
}
