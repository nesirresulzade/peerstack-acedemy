import React from 'react';
import DashboardLayout from 'peerstack/shared/layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <section>
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="mt-2 text-sm text-gray-600">Your admin panel is ready.</p>
      </section>
    </DashboardLayout>
  );
}
