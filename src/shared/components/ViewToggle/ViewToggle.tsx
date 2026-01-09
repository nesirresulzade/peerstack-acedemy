"use client";

import React, { useEffect, useState } from "react";

type Props = {
  view?: "grid" | "table";
  onChange?: (v: "grid" | "table") => void;
  className?: string;
};

export default function ViewToggle({ view = "grid", onChange, className = "" }: Props) {
  const [selectedView, setSelectedView] = useState<"grid" | "table">(view);

  useEffect(() => {
    setSelectedView(view);
  }, [view]);

  const active = selectedView === "grid";

  return (
    <div style={{ width: 172.25, height: 44 }} className={`flex items-center gap-2 bg-gray-100 rounded-xl p-1 ${className}`}>
      <button
        type="button"
        onClick={() => {
          setSelectedView("grid");
          onChange?.("grid");
        }}
        aria-pressed={active}
        className={`px-3 text-sm rounded-lg transition-all flex items-center gap-2 h-full cursor-pointer ${
          active ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <img src="/svglogos/layout-grid.svg" alt="grid" className="w-4 h-4" />
        <span className="hidden sm:inline">Grid</span>
      </button>

      <button
        type="button"
        onClick={() => {
          setSelectedView("table");
          onChange?.("table");
        }}
        aria-pressed={!active}
        className={`px-3 text-sm rounded-lg transition-all flex items-center gap-2 h-full cursor-pointer ${
          !active ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <img src="/svglogos/list.svg" alt="table" className="w-4 h-4" />
        <span className="hidden sm:inline">Table</span>
      </button>
    </div>
  );
}
