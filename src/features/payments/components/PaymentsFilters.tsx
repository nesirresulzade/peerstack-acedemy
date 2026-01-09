"use client";

import React from "react";
import FilterControl from "peerstack/shared/components/FilterControl/FilterControl";
import ActiveToggle from "peerstack/shared/components/ActiveToggle/ActiveToggle";

export default function PaymentsFilters() {
	const statusOptions = ["All Statuses", "Successful", "Pending", "Failed", "Refunded"];

	const cohortsOptions = ["All Cohorts", "Cohort 1", "Cohort 2"];

	const programsOptions = ["All Programs", "Program A", "Program B"];

	return (
		<div>
			<div style={{ width: 'calc(var(--mainpanel-width, 1216.8px) - 49.6px)', height: 55.99 }} className="flex items-center gap-6">
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
				/>

				<FilterControl
					label="Programs"
					variant="dropdown"
					options={programsOptions}
					defaultValue={programsOptions[0]}
					multi={true}
				/>
			</div>
		</div>
	);
}
