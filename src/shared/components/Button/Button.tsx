"use client";

import React from "react";

export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  isTransitioning?: boolean;
  icon?: React.ReactNode;
};

export function Button({
  label = "Add",
  onClick,
  disabled = false,
  isTransitioning = false,
  icon,
}: ButtonProps) {
  const isDisabled = disabled || isTransitioning;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {icon ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
