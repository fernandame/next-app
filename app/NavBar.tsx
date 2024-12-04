import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex gap-32 bg-slate-200 p-5 justify-center">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Produts</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
};

export default NavBar;
