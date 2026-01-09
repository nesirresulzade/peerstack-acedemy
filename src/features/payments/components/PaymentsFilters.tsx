"use client";

import React, { useEffect, useRef } from "react";
import FilterControl from "peerstack/shared/components/FilterControl/FilterControl";
import ActiveToggle from "peerstack/shared/components/ActiveToggle/ActiveToggle";

type Props = {
	onHeightChange?: (h: number) => void;
};

export default function PaymentsFilters({ onHeightChange }: Props) {
	const statusOptions = ["All Statuses", "Successful", "Pending", "Failed", "Refunded"];

	const cohortsOptions = ["All Cohorts", "Cohort 1", "Cohort 2"];

	const programsOptions = ["All Programs", "Back-End", "Front-End", "Full-Stack"];

	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		const el = containerRef.current;
		const ro = new ResizeObserver(() => onHeightChange?.(el.clientHeight));
		ro.observe(el);
		onHeightChange?.(el.clientHeight);
		return () => ro.disconnect();
	}, [onHeightChange]);

	return (
		<div>
			<div ref={containerRef} style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', height: 55.99 }} className="flex items-center gap-6">
				<FilterControl
					label="Status"
					variant="dropdown"
					options={statusOptions}
					defaultValue={statusOptions[0]}
					multi={true}
				/>

				<ActiveToggle label="Payment type" defaultValue="Passive" buttonLabel="1st Payments" persistKey="payments:paymentType" />

				<FilterControl
					label="Cohorts"
					variant="dropdown"
					options={cohortsOptions}
					defaultValue={cohortsOptions[0]}
					multi={true}
					persistKey="payments:cohorts"
				/>

				<FilterControl
					label="Programs"
					variant="dropdown"
					options={programsOptions}
					defaultValue={programsOptions[0]}
					multi={true}
					persistKey="payments:programs"
				/>
			</div>
		</div>
	);
}
