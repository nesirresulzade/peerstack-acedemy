"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  label?: string;
  variant?: "dropdown" | "toggle";
  options?: string[];
  defaultValue?: string | string[];
  multi?: boolean;
  onChange?: (value: string) => void;
  className?: string;
};

export default function FilterControl({
  label,
  variant = "dropdown",
  options = [],
  defaultValue,
  multi = false,
  onChange,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(() => {
    if (Array.isArray(defaultValue)) return defaultValue as string[];
    if (typeof defaultValue === "string") return [defaultValue];
    return options && options.length ? [options[0]] : [];
  });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (defaultValue) {
      if (Array.isArray(defaultValue)) setSelected(defaultValue as string[]);
      else setSelected([defaultValue as string]);
    }
  }, [defaultValue]);

  function handleSelect(val: string) {
    if (multi) {
      const firstOption = options && options[0];
      if (firstOption && val === firstOption) {
        setSelected([val]);
        onChange?.(val);
        setOpen(false);
        return;
      }

      setSelected((prev) => {
        const withoutAll = prev.filter((v) => v !== (options && options[0]));
        const exists = withoutAll.includes(val);
        const next = exists ? withoutAll.filter((v) => v !== val) : [...withoutAll, val];
        const result = next.length === 0 && options && options[0] ? [options[0]] : next;
        onChange?.(result.join(", "));
        return result;
      });
      setOpen(false);
      return;
    }
    setSelected([val]);
    setOpen(false);
    onChange?.(val);
  }

  function handleToggle() {
    if (!options || options.length < 2) return;
    const next = selected[0] === options[0] ? options[1] : options[0];
    setSelected([next]);
    onChange?.(next);
  }

  const isToggleActive = variant === "toggle" && selected[0] === options[0];

  const displayLabel = () => {
    if (!selected || selected.length === 0) return options && options[0] ? options[0] : "";
    const firstIsAll = options && options[0] && /^All/i.test(options[0]);
    if (selected.length === 1) {
      if (firstIsAll && selected[0] === options[0]) return options[0];
      return selected[0];
    }
    // If two or fewer selections, show their names (comma-separated).
    if (selected.length <= 2) {
      if (firstIsAll && selected.includes(options[0])) return options[0];
      return selected.join(', ');
    }

    if (selected.length === (options ? options.length : 0)) return options && options[0] ? options[0] : `${selected.length} Selected`;
    if (firstIsAll && selected.includes(options[0])) return options[0];
    return `${selected.length} Selected`;
  };

  const isButtonActive = (() => {
    const firstIsAll = options && options[0] && /^All/i.test(options[0]);
    if (!selected || selected.length === 0) return false;
    if (selected.length === 1) {
      if (firstIsAll && selected[0] === options[0]) return false;
      return true;
    }
    if (firstIsAll && selected.includes(options[0])) return false;
    if (selected.length === (options ? options.length : 0)) return false;
    return true;
  })();

  return (
    <div className="flex flex-col" ref={ref}>
      {label ? <div className="text-xs font-bold text-black uppercase">{label}</div> : null}

      {variant === "dropdown" ? (
        <div className="relative mt-2">
          <button
            type="button"
            data-slot="dropdown-menu-trigger"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            data-selected={displayLabel()}
            className={
              `inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-lg min-w-[140px] justify-between ` +
              (isButtonActive
                ? ` bg-black text-white border-transparent hover:bg-black/90 ${className}`
                : ` bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 ${className}`)
            }
          >
            <span className="truncate">{displayLabel()}</span>
            <img src="/svglogos/chevron-down.svg" alt="chev" className="w-4 h-4 ml-2" width={16} height={16} />
          </button>

          {open && (
            <div
              role="menu"
              aria-orientation="vertical"
              tabIndex={-1}
              data-side="bottom"
              data-align="start"
              data-state={open ? "open" : "closed"}
              data-radix-menu-content=""
              dir="ltr"
              className="absolute z-50 mt-2 bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 overflow-x-hidden overflow-y-auto rounded-md border border-gray-200 p-1 shadow-md min-w-[180px]"
            >
              {options.map((opt) => {
                const isSel = selected.includes(opt);
                return (
                  <div
                    key={opt}
                    role="menuitem"
                    onClick={() => handleSelect(opt)}
                    tabIndex={-1}
                    className={`relative cursor-pointer gap-2 rounded-sm px-2 py-1.5 text-sm select-none flex items-center justify-between hover:bg-gray-50 ${isSel ? "bg-white" : ""}`}
                  >
                    <span className="text-sm text-gray-900">{opt}</span>
                    {isSel ? (
                      <img src="/svglogos/check.svg" alt="check" className="w-4 h-4" width={16} height={16} />
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-2">
          <button
            type="button"
            onClick={handleToggle}
            className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-8 gap-1.5 px-3 rounded-lg min-w-[140px] cursor-pointer ${isButtonActive ? "bg-black text-white border-transparent hover:bg-black/90" : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"} `}
          >
            <span className="truncate">{displayLabel()}</span>
          </button>
        </div>
      )}
    </div>
  );
}
