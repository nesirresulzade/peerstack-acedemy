import React from 'react';
import PaymentsFeature from 'peerstack/features/payments/PaymentsFeature';
import MainPanel from 'peerstack/shared/components/MainPanel/MainPanel';

export default function PaymentsPage() {
	return (
		<MainPanel title="All Payments" subtitle="Showing 1-25 of 76 payments">
			<PaymentsFeature />
		</MainPanel>
	);
}
