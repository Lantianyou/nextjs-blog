import { ReactNode } from "react";

export default function Conatiner({ children }: { children: ReactNode }) {
  return <div className="container mx-auto">{children}</div>;
}
