"use client";

import * as React from 'react';

export type NavItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarProps = {
  items: NavItem[];
  logo?: React.ReactNode;
  onCollapse?: (collapsed: boolean) => void;
  initialCollapsed?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ items, logo, onCollapse, initialCollapsed = false }) => {
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);

  const toggleCollapse = () => {
    const next = !collapsed;
    setCollapsed(next);
    onCollapse?.(next);
  };

  return (
    <aside
      className="bg-white flex flex-col transition-all duration-200 ease-in-out flex-shrink-0"
      style={{ width: collapsed ? 72 : 256, minWidth: collapsed ? 72 : 256, boxSizing: 'border-box', minHeight: '100vh', boxShadow: '2px 0 12px rgba(16,24,40,0.06)' }}
      aria-label="Sidebar"
    >
      <div
        className="flex items-center justify-center px-4 flex-shrink-0"
        style={{ width: '100%', minHeight: 80, height: 80, boxShadow: '0 1px 0 rgba(16,24,40,0.04)', boxSizing: 'border-box' }}
      >
        {logo ?? (
          <div className="flex items-center justify-center w-full h-full">
            <LogoImage collapsed={collapsed} />
          </div>
        )}
      </div>

      <nav className={`flex-1 px-4 py-2`} style={{ overflow: 'hidden' as any, paddingTop: 30, boxSizing: 'border-box' }}>
        <ul className={`flex flex-col gap-3 py-4 ${collapsed ? 'items-center' : 'items-start'}`}>
          {items.map((item) => {
            const isActive = !!item.active;
            return (
              <li key={item.id} className="cursor-pointer">
                <button
                  type="button"
                  onClick={item.onClick}
                  aria-disabled={!item.onClick}
                  className={`group rounded-md text-left hover:bg-[#ECFDF5] transition-colors ${item.onClick ? 'cursor-pointer' : 'cursor-default opacity-80'} ${isActive ? 'sidebar-active' : ''} ${collapsed ? 'flex items-center justify-center' : 'flex items-center gap-3 w-full'}`}
                    style={
                      collapsed
                        ? {
                            width: 40,
                            height: 48,
                            background: isActive ? '#ECFDF5' : 'transparent',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxSizing: 'border-box',
                          }
                        : {
                            width: 223.2,
                            height: 48,
                            background: isActive ? '#ECFDF5' : 'transparent',
                            border: 'none',
                            padding: 8,
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                          }
                    }
                >
                  <span style={{ width: 20, height: 20 }} className={`flex-shrink-0 ${isActive ? 'text-[#009966]' : 'text-[#4A5565]'} group-hover:text-[#009966]`}>
                    {item.icon ?? (
                      <img src="/svglogos/nav-dot.svg" alt="nav" width={20} height={20} style={{ display: 'block' }} />
                    )}
                  </span>

                  <span
                    className={`${isActive ? 'text-[#009966]' : 'text-[#4A5565]'} group-hover:text-[#009966]`}
                    style={{
                      fontSize: 16,
                      lineHeight: '24px',
                      fontFamily: 'Ario, Arial, sans-serif',
                      maxWidth: collapsed ? 0 : 160,
                      opacity: collapsed ? 0 : 1,
                      marginLeft: collapsed ? 0 : 8,
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transition: 'max-width 220ms ease, opacity 200ms ease, margin-left 200ms ease',
                    }}
                  >
                    {item.label}
                    </span>
                    </button>
                  </li>
              );
            })}
          </ul>
      </nav>

      <div className="px-4 py-4 flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(16,24,40,0.04)' }}>
        {collapsed ? (
          <button
            type="button"
            data-slot="button"
            onClick={toggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 gap-1.5 has-[&>svg]:px-2.5 rounded-xl w-12 h-12 p-0 cursor-pointer hover:bg-[#F3F4F6]"
          >
            <img src="/svglogos/chevron-right.svg" alt="open" className="w-5 h-5" width={20} height={20} />
          </button>
        ) : (
          <button
            type="button"
            data-slot="button"
            onClick={toggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[&>svg]:px-2.5 rounded-xl w-full cursor-pointer hover:bg-[#F3F4F6]"
          >
            <img src="/svglogos/chevron-left.svg" alt="collapse" className="w-5 h-5 mr-2" width={20} height={20} />
            <span className="text-sm">Collapse</span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

function LogoImage({ collapsed }: { collapsed: boolean }) {
  const [failed, setFailed] = React.useState(false);

  if (!failed) {
    return (
      <>
        {collapsed ? (
          <img
            src="/imgs/peerstackicon.png"
            alt="peerstack"
            onError={() => setFailed(true)}
            width={28}
            height={28}
            style={{ objectFit: 'contain', display: 'block' }}
          />
        ) : (
          <img
            src="/imgs/peerstacklogo.png"
            alt="peerstack"
            onError={() => setFailed(true)}
            style={{
              width: 129,
              height: 32,
              objectFit: 'contain',
              display: 'block',
            }}
          />
        )}
      </>
    );
  }

  return (
    <div style={{ textAlign: 'center', color: '#000' }}>
      {!collapsed ? (
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 600 }}>peerstack</div>
          <div style={{ fontSize: 11, fontWeight: 300 }}>academy</div>
        </div>
      ) : (
        <div style={{ width: 28, height: 28, background: '#009966', borderRadius: 6 }} />
      )}
    </div>
  );
}
