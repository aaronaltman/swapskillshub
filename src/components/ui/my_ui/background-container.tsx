import React from "react";

export default function BackgroundContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 max-w-6xl mx-auto">
      {children}
    </div>
  );
}
