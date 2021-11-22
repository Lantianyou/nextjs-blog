import Meta from "./meta";
import Footer from "./footer";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  preview: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <Meta />
      {/* <Alert preview={preview} /> */}
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
