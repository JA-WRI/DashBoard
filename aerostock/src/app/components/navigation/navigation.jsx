import Link from "next/link";

export default function Navigation() {

  return (
    <div className="h-12 flex justify-center items-center px-4">
      <nav className="flex items-center gap-6">
        <Link href="Home">Home</Link>
        <Link href="Interface">ChatBot?</Link>
        <Link href="Form elements">Full Calendar</Link>
        <Link href='Layout'>CO2 Missions</Link>
        <Link href='Layout'>Flights</Link>
      </nav>
    </div>
  );
}