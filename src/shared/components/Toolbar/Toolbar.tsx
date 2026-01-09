"use client";

import React from "react";
import Input from "peerstack/shared/components/Input/Input";

type Props = {
  onSearch?: (q: string) => void;
  onExport?: () => void;
  className?: string;
};

export default function Toolbar({ onSearch, onExport, className = "" }: Props) {
  const [q, setQ] = React.useState("");

  return (
    <div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', height: 36 }} className={`flex items-center gap-3 ${className}`}>
      <div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px - 221.46px)', height: 36 }} className="relative">
        <img
          src="/svglogos/search.svg"
          alt="Search"
          aria-hidden="true"
          className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2"
        />
        <Input
          placeholder="Search by student, contract, transaction ID, or amount..."
          value={q}
          onChange={(e) => setQ((e.target as HTMLInputElement).value)}
          className="h-9 text-gray-600 focus:text-gray-600"
        />
      </div>

	  {/* Search button (green pill) */}
         <button
			type="button"
			className="
				h-11 px-5 rounded-full
				bg-emerald-600 text-white
				text-sm font-semibold
				hover:bg-emerald-700 transition-colors
				inline-flex items-center gap-2
				shadow-sm cursor-pointer
			"
			>
			<img
				src="/svglogos/search.svg"
				alt="Search"
				className="w-4 h-4 invert brightness-0"
			/>
			Search
		</button>

          {/* Export button (white pill) */}
          <button
            type="button"
            onClick={() => console.log("export")}
            className="
              h-11 px-5 rounded-full
              bg-white text-gray-900
              text-sm font-semibold
              border border-gray-200
              hover:bg-gray-50 transition-colors
              inline-flex items-center gap-2
            "
          >
			<img
				src="/svglogos/export-icon.svg"
				alt="export"
				className="w-4 h-4  "
			/>
            
            Export
          </button>


    </div>
  );
}
