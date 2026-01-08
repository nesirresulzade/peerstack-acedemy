"use client";

import React from "react";

export type HeaderProps = {
    left?: React.ReactNode;
    title?: string;
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
    const [selectedFilter, setSelectedFilter] = React.useState<string>(filterOpts[0]);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const transitionMs = transitionDelayMs ?? 1500;

    return (
        <header className={`w-full h-[76.8px] min-h-[76.8px] flex items-center justify-between px-6 bg-[#FFFFFF] ${className}`}>
            {/* Left: static filters (Payments style) */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 shadow bg-[#F3F4F6] rounded-full">
                        {filterOpts.map((opt, idx) => {
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

                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={handleClick}
                                    disabled={isTransitioning}
                                    className={`text-[14px] px-3 py-2 transition-all duration-150 focus:outline-none ${isTransitioning ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${
                                        isSelected
                                            ? "bg-[#FFFFFF] rounded-full shadow-sm text-[#101828]"
                                            : "bg-transparent rounded-full hover:bg-[#FFFFFF] text-[#4A5565] hover:text-[#101828]"
                                    } ${idx === 0 ? "px-4" : ""}`}
                                    style={{ fontFamily: 'Arimo, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
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
                            className={`p-2 rounded-full hover:bg-[#F3F4F6] ${isTransitioning ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
                            <img src="/svglogos/reloadicon.svg" alt="Reload" className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <button
                    type="button"
                    onClick={onAction}
                    disabled={actionDisabled || isTransitioning}
                    className={`flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-[#FFFFFF] px-4 py-2 rounded-full text-sm font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${isTransitioning || actionDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>{actionLabel ?? "Add a payment"}</span>
                </button>

                {showAvatar && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white flex items-center justify-center font-semibold">
                        {avatarInitials}
                    </div>
                )}
            </div>
        </header>
    );
}

export { Header };
