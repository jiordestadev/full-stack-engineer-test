import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="sticky top-0 p-[2rem]">
        <Link href={"/"}>
          <img src="/icons/return.svg" width={30} height={30} alt="" />
        </Link>
      </nav>
      <section className="h-screen flex justify-center items-center">
        {children}
      </section>
    </>
  );
}
