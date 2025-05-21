import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Building, MapPin, Phone, Save } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
    phone: '+1 (555) 123-4567',
    department: 'Administration',
    location: 'Art Academy Campus',
    bio: 'Administrator responsible for managing course enrollments, student registrations, and general inquiries.',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user data
    alert('Profile updated successfully!');
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <p className="text-text-muted">Manage your account information</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <div className="card md:col-span-1">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img 
                src={user?.avatar} 
                alt={user?.name} 
                className="h-24 w-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-white hover:bg-primary-light">
                <User size={14} />
              </button>
            </div>
            
            <h2 className="mt-4 text-xl font-semibold">{user?.name}</h2>
            <p className="text-text-muted">{user?.role}</p>
            
            <div className="mt-6 w-full border-t border-border pt-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" size={16} />
                  <span className="text-sm">{user?.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" size={16} />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2 text-primary" size={16} />
                  <span className="text-sm">Administration</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" size={16} />
                  <span className="text-sm">Art Academy Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Form */}
        <div className="card md:col-span-2">
          <h3 className="mb-4 text-lg font-medium">Edit Profile Information</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="mb-1 block text-sm font-medium">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="department" className="mb-1 block text-sm font-medium">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="mb-1 block text-sm font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="bio" className="mb-1 block text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="input"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button type="submit" className="btn btn-primary flex items-center gap-2">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;