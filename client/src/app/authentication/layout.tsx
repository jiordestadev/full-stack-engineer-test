import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <section className="h-screen flex justify-center items-center">
      {children}
    </section>
  );
}
