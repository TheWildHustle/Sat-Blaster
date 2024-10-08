import {
  RiBrushLine,
  RiChat3Line,
  RiFileLine,
  RiFolderOpenLine,
  RiHomeLine,
  RiInformationLine,
  RiSettings3Line,
  RiVipCrownLine,
} from '@remixicon/react';
import { useLocalState } from 'irisdb-hooks';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import config from '@/config.json';
import Show from '@/shared/components/Show.tsx';

export const NavSideBar = ({
  isSidebarOpen,
  setSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isLoggedIn] = useLocalState('user/publicKey', false, Boolean);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      // Check if the click is outside the sidebar
      if (!ref.current?.contains(e.target as Node)) {
        setSidebarOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
        (document.activeElement as HTMLElement | undefined)?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', closeSidebar);
    };
  }, [setSidebarOpen]);

  return (
    <div
      ref={ref}
      className={`fixed select-none shadow-lg top-0 left-0 w-64 h-full bg-base-100 z-40 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out flex flex-col`}
    >
      <Link className="mx-6 m-4 text-2xl flex items-center gap-2" to="/">
        <img src="/android-chrome-192x192.png" alt={config.appTitle} className="w-8 h-8" />
        {config.appTitle}
      </Link>
      <hr className="border-base-300" />
      <ul className="menu w-full rounded-box">
        {config.isCreateIris ? (
          <>
            <li>
              <Link to="/">
                <RiHomeLine className="w-5 h-5" />
                Wallet
              </Link>
            </li>
            <Link to="/">
              <RiFileLine className="w-5 h-5" />
              Zap Stream
            </Link>
            <li>
            </li>
            <Link to="/">
              <RiFileLine className="w-5 h-5" />
              Zap Split
            </Link>
            <li>
            </li>
            <Link to="/">
              <RiFileLine className="w-5 h-5" />
              Zapscribe
            </Link>
            <li>

              
             
            </li>
          </>
        ) : (
          <li>
            <Link to="/">
              <RiFileLine className="w-5 h-5" />
              Menu
            </Link>
          </li>
        )}
       
        
      </ul>
      <hr className="border-base-300" />
      <ul className="menu w-full rounded-box">
        <li>
          <Link to="/settings">
            <RiSettings3Line className="w-5 h-5" />
            Relays
          </Link>
        </li>
        {!config.isCreateIris && (
          <li>
            <Link to="/document/iris-docs-about?owner=npub1g53mukxnjkcmr94fhryzkqutdz2ukq4ks0gvy5af25rgmwsl4ngq43drvk">
              <RiInformationLine className="w-5 h-5" />
              About
            </Link>
          </li>
        )}
        
      </ul>
      
      <hr className="border-base-300" />
      <Show when={isLoggedIn}>
        <ul className="menu w-full rounded-box">
          
        </ul>
        <hr className="border-base-300" />
      </Show>
    </div>
  );
};
