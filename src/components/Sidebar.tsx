import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, 
  MessageSquare,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Palette } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const { logout } = useAuth();
  
  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto bg-card border-r border-border p-4 shadow-lg transition-transform lg:relative lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">Kalakar Admin</h1>
        </div>
        <button 
          onClick={onClose}
          className="rounded-md p-1 text-text-muted hover:bg-primary/10 hover:text-primary lg:hidden"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="space-y-1">
        <NavLink to="/submissions" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={18} />
          <span>Contact Submissions</span>
        </NavLink>
        
        <button 
          onClick={logout}
          className="sidebar-item text-error hover:bg-error/10 hover:text-error w-full text-left"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;