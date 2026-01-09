"use client";

import React from 'react';
import StudentsFilters from './components/StudentsFilters';
import Toolbar from 'peerstack/shared/components/Toolbar/Toolbar';

export default function StudentsFeature() {
  const [filtersH, setFiltersH] = React.useState<number>(0);

  // if filters wrap to second row, height will exceed ~56px; increase toolbar spacing
  const toolbarMargin = filtersH > 80 ? 40 : 28; // px (increased slightly)

  return (
    <div>
      <StudentsFilters onHeightChange={(h) => setFiltersH(h)} />

      <div style={{ marginTop: toolbarMargin }}>
        <Toolbar onSearch={(q) => console.log('students search', q)} onExport={() => console.log('students export')} />
      </div>
    </div>
  );
}
