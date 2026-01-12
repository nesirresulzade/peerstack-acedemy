"use client";

import React from 'react';
import PaymentsFilters from './components/PaymentsFilters';
import Toolbar from 'peerstack/shared/components/Toolbar/Toolbar';

export default function PaymentsFeature() {
  const [filtersH, setFiltersH] = React.useState<number>(0);

  const toolbarMargin = filtersH > 80 ? 40 : 28;

  return (
    <div>
      <PaymentsFilters onHeightChange={(h) => setFiltersH(h)} />

      <div style={{ marginTop: toolbarMargin }}>
        <Toolbar onSearch={(q) => console.log('payments search', q)} onExport={() => console.log('payments export')} />
      </div>
    </div>
  );
}