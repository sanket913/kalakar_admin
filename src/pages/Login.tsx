import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

// Import local images
import gallery1 from '../assets/images/gallery1.jpeg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

// Create an array of art assets with names for display
const artAssets = [
  { src: gallery1, name: 'Abstract Painting' },
  { src: gallery2, name: 'Modern Art' },
  { src: gallery3, name: 'Bronze Sculpture' },
  { src: gallery4, name: 'Charcoal Sketch' },
  { src: gallery5, name: 'Portrait Study' },
  { src: gallery6, name: 'Nature Landscape' },
];

// Create a responsive component for art gallery display
const ArtGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {/* Art images preview from local assets */}
      {artAssets.map((art, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-md bg-black/20 hover:opacity-90 transition-opacity">
          <img 
            src={art.src} 
            alt={art.name} 
            className="h-full w-full object-cover" 
            title={art.name}
          />
        </div>
      ))}
    </div>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-bg">
      {/* Left side - Art display */}
      <div className="lg:w-1/2 bg-primary">
        <div className="flex h-full flex-col items-center justify-center p-4 sm:p-8 md:p-12 text-white">
          <div className="w-full max-w-md text-center">
            <Palette className="mx-auto h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Kalakar Art Academy</h1>
            <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-8">
              Admin Dashboard for managing art courses, students, and inquiries.
            </p>
            <ArtGallery />
          </div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="flex w-full flex-col justify-center p-4 sm:p-8 md:p-12 lg:w-1/2">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-4 sm:mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h1 className="text-lg sm:text-xl font-bold">Kalakar Admin</h1>
            </div>
            <button 
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-muted hover:bg-primary/10"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          
          <div className="card animate-slide-up p-4 sm:p-6">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Welcome back</h2>
              <p className="text-text-muted">Sign in to your admin account</p>
            </div>
            
            {error && (
              <div className="mb-4 rounded-md bg-error/10 p-3 text-sm text-error">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input pl-10 w-full text-sm sm:text-base"
                      placeholder="admin@kalakar.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input pl-10 w-full text-sm sm:text-base"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                
                <button
                  type="submit"
                  className="btn btn-primary w-full text-sm sm:text-base py-2 sm:py-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
