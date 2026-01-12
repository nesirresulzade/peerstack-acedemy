"use client";

import React, { useEffect, useRef } from "react";
import FilterControl from "peerstack/shared/components/FilterControl/FilterControl";

type Props = {
	onHeightChange?: (h: number) => void;
};

export default function StudentsFilters({ onHeightChange }: Props) {
	const roleOptions = ["All Roles", "Student", "Guardian"];

	const attendanceTypeOptions = ["All Types", "Hybrid", "Physical", "Remote"];

	const shiftOptions = [
		"All Shifts",
		"Full-time on weekdays",
		"Part-time: I, III, V afternoon shift",
		"Part-time: I, III, V evening shift",
		"Part-time: I, III, V morning shift",
		"Part-time: II, IV, VI afternoon shift",
		"Part-time: II, IV, VI evening shift",
		"Part-time: II, IV, VI morning shift",
	];

	const attendanceRateOptions = ["All Rates", "≥ 85%", "< 85%"];

	const cohortsOptions = [
		"All Cohorts",
		"AI - 1025",
		"CS-0526",
		"DS- 0127",
		"FS- 0266",
		"ML- 0725",
	];

	const programsOptions = ["All Programs", "Back-End", "Front-End", "Full Stack"];

	const paymentDueOptions = ["All Dues", "7 Days Left", "3 Days Left", "1 Day Left", "Late (Missing)"];

	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		const el = containerRef.current;
		const ro = new ResizeObserver(() => onHeightChange?.(el.clientHeight));
		ro.observe(el);
		// initial report
		onHeightChange?.(el.clientHeight);
		return () => ro.disconnect();
	}, [onHeightChange]);

	return (
		<div>
				<div
					ref={containerRef}
					style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', minHeight: 55.99, maxHeight: 111.98 }}
					className="flex flex-wrap items-center gap-6"
				>
				<FilterControl label="Role" variant="dropdown" options={roleOptions} defaultValue={roleOptions[0]} multi={true} persistKey="students:role" />

				<FilterControl label="Attendance Type" variant="dropdown" options={attendanceTypeOptions} defaultValue={attendanceTypeOptions[0]} multi={true} persistKey="students:attendanceType" />

				<FilterControl label="Shift" variant="dropdown" options={shiftOptions} defaultValue={shiftOptions[0]} multi={true} persistKey="students:shift" />

				<FilterControl label="Attendance Rate" variant="dropdown" options={attendanceRateOptions} defaultValue={attendanceRateOptions[0]} multi={true} persistKey="students:attendanceRate" />

				<FilterControl label="Cohorts" variant="dropdown" options={cohortsOptions} defaultValue={cohortsOptions[0]} multi={true} persistKey="students:cohorts" />

				<FilterControl label="Programs" variant="dropdown" options={programsOptions} defaultValue={programsOptions[0]} multi={true} persistKey="students:programs" />

				<FilterControl label="Payment Due" variant="dropdown" options={paymentDueOptions} defaultValue={paymentDueOptions[0]} multi={true} persistKey="students:paymentDue" />


			</div>
		</div>
	);
}
