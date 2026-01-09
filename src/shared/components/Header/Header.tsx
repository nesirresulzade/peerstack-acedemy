"use client";

import React from "react";
import { Button } from "peerstack/shared/components/Button/Button";
import Avatar from 'peerstack/shared/components/Avatar/Avatar';

export type HeaderProps = {
  left?: React.ReactNode;
  title?: string;

  activeTab?: "students" | "payments";

  actionLabel?: string;

  onAction?: () => void;
  onFilterChange?: (filter: string) => void;
  filterOpts?: string[];
  showLastSync?: boolean;
  avatarInitials?: string;
  className?: string;
  showAvatar?: boolean;
  actionDisabled?: boolean;
  actionIcon?: React.ReactNode;
  transitionDelayMs?: number;
};

export default function Header({
  left,
  title,

  activeTab = "payments",
  actionLabel,

  onAction,
  onFilterChange,
  filterOpts = ["January", "2026", "All"],
  showLastSync = true,
  avatarInitials = "AA",
  className = "",
  showAvatar = true,
  actionDisabled = false,
  actionIcon,
  transitionDelayMs = 1500,
}: HeaderProps) {
  const computedFilterOpts = (filterOpts && filterOpts.length > 0)
    ? filterOpts
    : activeTab === "students"
    ? ["Active Student", "All"]
    : ["January", "2026", "All"];

  const [selectedFilter, setSelectedFilter] = React.useState<string>(computedFilterOpts[0]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const transitionMs = transitionDelayMs ?? 1500;

  const computedLabel = activeTab === "students" ? "Add a student" : "Add a payment";

  return (
    <header
      className={`w-full h-[76.8px] min-h-[76.8px] flex items-center justify-between px-6 bg-[#FFFFFF] ${className}`}
    >
      {/* Left: filter pills (Figma design) */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            {computedFilterOpts.map((opt, idx) => {
              const isSelected = selectedFilter === opt;

              const handleClick = () => {
                if (isTransitioning || isSelected) return;
                setSelectedFilter(opt);
                setIsTransitioning(true);

                setTimeout(() => {
                  setIsTransitioning(false);
                  onFilterChange?.(opt);
                }, transitionMs);
              };

              const baseClass = "px-3 lg:px-4 py-2 text-sm rounded-lg transition-all";
              const selectedClass = "bg-white text-gray-900 shadow-sm";
              const normalClass = "text-gray-600 hover:text-gray-900";

              return (
                <button
                  key={opt}
                  type="button"
                  onClick={handleClick}
                  disabled={isTransitioning}
                  className={`${baseClass} ${isSelected ? selectedClass : normalClass} ${
                    isTransitioning ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  style={{
                    fontFamily:
                      'Arimo, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: static actions (last sync, refresh, add button, avatar) */}
      <div className="flex items-center gap-4">
        {showLastSync !== false && (
          <div className="flex items-center text-sm gap-3">
            <div className="text-right">
              <div className="text-xs text-[#4A5565]">Last sync:</div>
              <div className="text-sm font-medium text-[#101828]">12:45</div>
            </div>

            <button
              aria-label="Reload"
              type="button"
              onClick={() => {}}
              disabled={isTransitioning}
              className={`p-2 rounded-full hover:bg-[#F3F4F6] ${
                isTransitioning ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <img src="/svglogos/reloadicon.svg" alt="Reload" width={16} height={16} className="w-4 h-4" />
            </button>
          </div>
        )}


        <Button
          label={actionLabel ?? computedLabel}
          onClick={onAction}
          disabled={actionDisabled}
          isTransitioning={isTransitioning}
          icon={actionIcon}
        />

        {showAvatar && (
          <Avatar initials={avatarInitials} size={40} />
        )}
      </div>
    </header>
  );
}

export { Header };
