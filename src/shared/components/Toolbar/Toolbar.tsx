"use client";

import React from "react";
import Input from "peerstack/shared/components/Input/Input";
import { Button } from "peerstack/shared/components/Button/Button";

type Props = {
  onSearch?: (q: string) => void;
  onExport?: () => void;
  className?: string;
};

export default function Toolbar({ onSearch, onExport, className = "" }: Props) {
  const [q, setQ] = React.useState("");

  return (
    <div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', height: 36 }} className={`flex items-center gap-3 mt-4 ${className}`}>
      <div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px - 221.46px)', height: 36 }} className="relative">
        <img src="/svglogos/search.svg" alt="Search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />

        <Input
          placeholder="Search by student, contract, transaction ID, or amount..."
          value={q}
          onChange={(e) => setQ((e.target as HTMLInputElement).value)}
          className="h-9 text-gray-600 focus:text-gray-600"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={() => onSearch?.(q)}
          label="Search"
          className="!w-[98.16px] !h-[36px] bg-[#009966] hover:bg-[#008e57] text-white rounded-lg"
          icon={(
            <img src="/svglogos/searchwhite.svg" alt="Search" className="w-4 h-4" />
          )}
        />

        <Button
          onClick={() => onExport?.()}
          label="Export"
          className="!w-[98.16px] !h-[36px] !bg-white !text-black hover:!bg-gray-100 hover:!text-black !border !border-gray-200 !rounded-lg"
          icon={(
            <img src="/svglogos/export-icon.svg" alt="Export" className="w-4 h-4 text-black" />
          )}
        />
      </div>
    </div>
  );
}
