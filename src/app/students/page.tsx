import React from 'react';
import StudentsFeature from 'peerstack/features/students/StudentsFeature';
import MainPanel from 'peerstack/shared/components/MainPanel/MainPanel';
import ViewToggle from 'peerstack/shared/components/ViewToggle/ViewToggle';

export default function StudentsPage() {
	return (
		<MainPanel
			title="All Students"
			subtitle="Showing 1-25 of 76 students"
			hideControls={true}
			headerControls={<ViewToggle />}
		>
			<StudentsFeature />
		</MainPanel>
	);
}
