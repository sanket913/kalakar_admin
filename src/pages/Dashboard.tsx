import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MessageSquare } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-text-muted">Welcome back, {user?.name}!</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Submissions"
          value="0"
          icon={<MessageSquare size={20} />}
        />
      </div>
    </div>
  );
}

export default Dashboard;