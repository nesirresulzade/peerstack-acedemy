import React from 'react';
import StudentsFeature from 'peerstack/features/students/StudentsFeature';
import MainPanel from 'peerstack/shared/components/MainPanel/MainPanel';

export default function StudentsPage() {
	return (
		<MainPanel title="All Students" subtitle="Showing 1-25 of 76 students">
			<StudentsFeature />
		</MainPanel>
	);
}
