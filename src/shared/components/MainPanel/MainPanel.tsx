"use client";

import React from "react";
import { Button } from 'peerstack/shared/components/Button/Button';
import FilterControl from 'peerstack/shared/components/FilterControl/FilterControl';
import ActiveToggle from 'peerstack/shared/components/ActiveToggle/ActiveToggle';

type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function MainPanel({
  title = "All Payments",
  subtitle = "",
  children,
  className = "",
}: Props) {
  return (
    <div
      className="bg-white shadow-sm p-2"
      style={{
        width: 'var(--mainpanel-width, 1216.8px)',
        height: 1878.19,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="flex items-center justify-between mb-6 px-6 py-5" style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)' }}>
        <div className="flex flex-col justify-center" style={{ height: 51, width: '100%' }}>
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          {subtitle ? (
            <p
              className="mt-1"
              style={{
                fontFamily:
                  'Arimo, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                fontSize: 14,
                lineHeight: '20px',
                color: '#6A7282',
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-3" style={{ width: 'auto' }}>
          <Button
            label="More Filters"
            className={`bg-white !text-black border border-gray-200 hover:bg-gray-50 h-8 gap-1.5 px-3 rounded-lg relative`}
            icon={<img src="/svglogos/funnel.svg" alt="filters" className="w-4 h-4 mr-2" width={16} height={16} />}
          />
        </div>
      </div>

      {/* Controls row (below header) */}
      <div className="px-6">
        <div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', height: 55.99 }} className="flex items-center gap-6">
          <FilterControl
            label="Status"
            variant="dropdown"
            options={["All Statuses", "Successful", "Pending", "Failed", "Refunded"]}
            defaultValue="All Statuses"
            multi={true}
          />

          <ActiveToggle label="Payment type" defaultValue="Active" buttonLabel="1st Payments" />

          <FilterControl
            label="Cohorts"
            variant="dropdown"
            options={["All Cohorts", "Cohort 1", "Cohort 2"]}
            defaultValue="All Cohorts"
            multi={true}
          />

          <FilterControl
            label="Programs"
            variant="dropdown"
            options={["All Programs", "Program A", "Program B"]}
            defaultValue="All Programs"
            multi={true}
          />
        </div>
      </div>

      <div className="p-6 overflow-auto" style={{ height: "calc(100% - 64px)" }}>
        {children}
      </div>
    </div>
  );
}
