import React from "react";

export default function BackgroundContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-zinc-100 max-w-6xl mx-auto md:rounded-full">
      {children}
    </div>
  );
}
