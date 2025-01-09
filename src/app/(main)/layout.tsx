import Navbar from "@/components/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <hr />
      <section className="my-2">{children}</section>
    </div>
  );
}
