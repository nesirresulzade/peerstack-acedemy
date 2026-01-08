"use client";

import React from "react";

export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  isTransitioning?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

export function Button({
  label = "Add",
  onClick,
  disabled = false,
  isTransitioning = false,
  icon,
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || isTransitioning;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 gap-1.5 px-3 has-[&>svg]:px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {icon ?? (
        <img src="/svglogos/plus.svg" alt="add" className="w-4 h-4 lg:mr-2" width={16} height={16} />
      )}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
