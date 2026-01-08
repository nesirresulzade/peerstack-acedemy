"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from 'peerstack/shared/components/layout/Sidebar';
import Header from 'peerstack/shared/components/Header/Header';

type Item = {
	id: string;
	label: string;
	icon?: React.ReactNode;
	href?: string;
	active?: boolean;
	onClick?: () => void;
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const pathname = usePathname() || '/';
	const router = useRouter();

	const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

	const items: Item[] = [
		{
			id: 'dashboard', label: 'Dashboard', icon: (
				<img src="/svglogos/dashboardicon.svg" alt="Dashboard" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			)
		},
		{
			id: 'payments', label: 'Payments', icon: (
				<img src="/svglogos/paymenticon.svg" alt="Payments" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			), href: '/payments'
		},
		{
			id: 'students', label: 'Students', icon: (
				<img src="/svglogos/user.svg" alt="Students" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			), href: '/students'
		},
		{
			id: 'conversations', label: 'Conversations', icon: (
				<img src="/svglogos/conversationicon.svg" alt="Conversations" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			)
		},
		{
			id: 'administrators', label: 'Administrators', icon: (
				<img src="/svglogos/administrator.svg" alt="Administrators" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			)
		},
		{
			id: 'settings', label: 'Settings', icon: (
				<img src="/svglogos/settingicon.svg" alt="Settings" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
			)
		},
	];

	const itemsWithActive = items.map((it: Item) => {
		const href = it.href;
		return {
			...it,
			active: href ? pathname === href || pathname.startsWith(href + '/') : !!it.active,
			onClick: href ? () => router.push(href) : it.onClick,
		};
	});

	const headerFilterOpts = pathname.startsWith('/students')
		? ['Active Student', 'All']
		: ['January', '2026', 'All'];

	const headerActionLabel = pathname.startsWith('/students') ? 'Add a student' : 'Add a payment';

	const showLastSync = !pathname.startsWith('/students');

	return (
		<div className="h-screen flex overflow-hidden overflow-x-hidden">
			<Sidebar items={itemsWithActive} onCollapse={setSidebarCollapsed} />
			<div className="flex-1 flex flex-col" style={{ ['--mainpanel-width' as any]: sidebarCollapsed ? '1392.8px' : '1216.8px' }}>
				<Header filterOpts={headerFilterOpts} actionLabel={headerActionLabel} showLastSync={showLastSync} />
				<main className="flex-1 bg-gray-50 p-6 overflow-auto">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
