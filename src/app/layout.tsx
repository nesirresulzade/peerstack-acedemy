import React from 'react';
import '../styles/globals.css';
import DevToolsCleaner from 'peerstack/shared/components/DevToolsCleaner/DevToolsCleaner';

export const metadata = {
	title: 'Peerstack Admin',
	description: 'Admin panel',
	icons: {
		icon: '/imgs/peerstackicon.png',
		apple: '/imgs/peerstackicon.png'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className="antialiased bg-gray-50">
			<DevToolsCleaner />
			{children}
		</body>
		</html>
	);
}