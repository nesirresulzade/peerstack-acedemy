import React from 'react';
import Sidebar from 'peerstack/shared/components/layout/Sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const items = [
        {
            id: 'dashboard', label: 'Dashboard', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>
            )
        },
        {
            id: 'payments', label: 'Payments', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" /></svg>
            ), active: true
        },
        {
            id: 'students', label: 'Students', icon: (
                <img src="/svglogos/user.svg" alt="Students" width={20} height={20} style={{ display: 'block' }} className="sidebar-icon" />
            )
        },
        {
            id: 'conversations', label: 'Conversations', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
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

    return (
        <div className="min-h-screen flex">
            <Sidebar items={items} />
            <main className="flex-1 bg-gray-50 p-6">{children}</main>
        </div>
    );
};

export default DashboardLayout;
