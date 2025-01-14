import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center">
      <Loader2 className="text-primary animate-spin" />
    </div>
  );
}
