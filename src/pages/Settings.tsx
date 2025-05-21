import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Bell, Lock, Shield, Eye, EyeOff } from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-text-muted">Manage your account settings and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Appearance */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
              {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
            </div>
            <h2 className="text-lg font-medium">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-text-muted">Choose between light and dark theme</p>
              </div>
              <button 
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-border"
              >
                <span className="sr-only">Toggle theme</span>
                <span 
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Reduced Motion</p>
                <p className="text-sm text-text-muted">Disable animations</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-border">
                <span className="sr-only">Toggle reduced motion</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">High Contrast</p>
                <p className="text-sm text-text-muted">Increase color contrast</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-border">
                <span className="sr-only">Toggle high contrast</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Notifications */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
              <Bell size={18} />
            </div>
            <h2 className="text-lg font-medium">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Submissions</p>
                <p className="text-sm text-text-muted">Get notified when a new contact submission arrives</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="sr-only">Toggle new submissions notifications</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-text-muted">Receive email notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="sr-only">Toggle email notifications</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing Updates</p>
                <p className="text-sm text-text-muted">Receive marketing and promotional emails</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-border">
                <span className="sr-only">Toggle marketing updates</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Security */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
              <Lock size={18} />
            </div>
            <h2 className="text-lg font-medium">Security</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-text-muted">Update your password</p>
              
              <div className="mt-3 grid grid-cols-1 gap-3">
                <div>
                  <label htmlFor="current-password" className="mb-1 block text-sm font-medium">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="current-password"
                      className="input pr-10"
                      placeholder="••••••••"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="new-password" className="mb-1 block text-sm font-medium">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="new-password"
                      className="input pr-10"
                      placeholder="••••••••"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
                      <EyeOff size={16} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      className="input pr-10"
                      placeholder="••••••••"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
                      <EyeOff size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary mt-3">Update Password</button>
            </div>
          </div>
        </div>
        
        {/* Privacy */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
              <Shield size={18} />
            </div>
            <h2 className="text-lg font-medium">Privacy</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-text-muted">Enable two-factor authentication for better security</p>
              </div>
              <button className="btn btn-outline text-sm">Enable</button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session Management</p>
                <p className="text-sm text-text-muted">Manage active sessions</p>
              </div>
              <button className="btn btn-outline text-sm">View</button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Data Export</p>
                <p className="text-sm text-text-muted">Export all your data</p>
              </div>
              <button className="btn btn-outline text-sm">Export</button>
            </div>
            
            <div className="pt-2">
              <button className="text-sm text-error hover:underline">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;