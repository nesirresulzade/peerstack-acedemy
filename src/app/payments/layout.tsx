import React from 'react';
import DashboardLayout from 'peerstack/shared/layout/DashboardLayout';

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
