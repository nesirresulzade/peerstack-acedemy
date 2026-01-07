"use client";

import { useEffect } from 'react';

export default function DevToolsCleaner() {
  useEffect(() => {
    function removeDevIndicators() {
      try {
        const ids = ['devtools-indicator', 'next-logo'];
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el && el.parentNode) el.parentNode.removeChild(el);
        });

        const selectors = ['[data-nextjs-toast]', '[data-next-badge-root]', '[data-next-badge]'];
        selectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((n) => n.remove());
        });

        document.querySelectorAll('nextjs-portal, nextjs-badge, #nextjs-portal').forEach((n) => n.remove());
      } catch (e) {
      }
    }

    removeDevIndicators();

    const observer = new MutationObserver(() => removeDevIndicators());
    observer.observe(document.documentElement, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
