"use client";

import React, { useState, useEffect } from "react";

type Props = {
  label?: string;
  defaultValue?: "Active" | "Passive";
  buttonLabel?: string;
  onChange?: (value: "Active" | "Passive") => void;
  className?: string;
  persistKey?: string;
};

export default function ActiveToggle({
  label,
  defaultValue = "Active",
  buttonLabel = "1st Payments",
  onChange,
  className = "",
  persistKey,
}: Props) {
  const [value, setValue] = useState<"Active" | "Passive">(defaultValue);

  useEffect(() => {
    if (!persistKey) return;
    try {
      const raw = localStorage.getItem(persistKey);
      if (raw === "Active" || raw === "Passive") {
        setValue(raw as "Active" | "Passive");
      }
    } catch (e) {
      // ignore
    }
  }, [persistKey]);

  function toggleValue() {
    const next = value === "Active" ? "Passive" : "Active";
    setValue(next);
    onChange?.(next);
    if (persistKey) {
      try {
        localStorage.setItem(persistKey, next);
      } catch (e) {
        // ignore
      }
    }
  }

  return (
    <div className="flex flex-col relative">
      {label ? <div className="text-xs font-bold text-black uppercase">{label}</div> : null}

      <div className="mt-2">
        <button
          type="button"
          onClick={toggleValue}
          className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-8 gap-1.5 px-3 rounded-lg border cursor-pointer ${
            value === "Active"
              ? "bg-black text-white border-transparent hover:bg-black/90"
              : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
          } ${className}`}
        >
          <span className="truncate">{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
}
