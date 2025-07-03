"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdPeople, 
  MdReceipt, 
  MdPayments, 
  MdSettings, 
  MdLogout,
  MdMenu,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, isActive, isCollapsed }) => {
  return (
    <Link 
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out
        ${isActive 
          ? 'bg-[#4F65B0] text-white' 
          : 'hover:bg-[#4F65B0]/10 text-gray-700 hover:text-[#4F65B0]'
        }
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      <div className="text-xl">{icon}</div>
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { icon: <MdDashboard />, label: 'Dashboard', href: '/dashboard' },
    { icon: <MdPeople />, label: 'Clients', href: '/dashboard/clients' },
    { icon: <MdReceipt />, label: 'Invoices', href: '/dashboard/invoices' },
    { icon: <MdPayments />, label: 'Transactions', href: '/dashboard/transactions' },
    { icon: <MdSettings />, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <>
      {/* Mobile menu button - visible only on small screens */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md md:hidden"
        onClick={toggleMobileSidebar}
      >
        <MdMenu className="text-xl" />
      </button>

      {/* Sidebar - responsive */}
      <aside 
        className={`
          fixed md:relative z-40 h-screen bg-white shadow-md transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'} 
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`
            flex items-center justify-between p-4 border-b
            ${isCollapsed ? 'justify-center' : ''}
          `}>
            {!isCollapsed && (
              <h1 className="text-xl font-semibold">
                invoice<span className="text-[#4F65B0]">.</span>
              </h1>
            )}
            <button 
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleSidebar}
            >
              {isCollapsed ? <MdChevronRight /> : <MdChevronLeft />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>

          {/* Footer with logout */}
          <div className="p-3 border-t">
            <NavItem 
              icon={<MdLogout />}
              label="Log out"
              href="/logout"
              isActive={false}
              isCollapsed={isCollapsed}
            />
          </div>
        </div>
      </aside>

      {/* Overlay for mobile - closes sidebar when clicking outside */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;