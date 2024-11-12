import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex bg-blue-500 justify-between text-white text-xl border-b text-center shadow-md p-4 gap-5">
      <div className="text-2xl font-bold">
        <Link href="/">My App</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
