import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <header className="border-b border-border bg-card px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="rounded-md p-2 text-text-muted hover:bg-primary/10 hover:text-primary lg:hidden"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
        
        {/* Right section */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="rounded-md p-2 text-text-muted hover:bg-primary/10 hover:text-primary"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          {/* User profile */}
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 rounded-md p-1 text-sm hover:bg-primary/10"
            >
              <img 
                src={user?.avatar} 
                alt={user?.name} 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="hidden font-medium md:block">{user?.name}</span>
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 top-full z-10 mt-1 w-48 animate-slide-up rounded-md border border-border bg-card py-1 shadow-lg">
                <div className="border-b border-border px-4 py-2">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-text-muted">{user?.email}</p>
                </div>
                <a href="/login" className="block border-t border-border px-4 py-2 text-sm text-error hover:bg-error/10">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;