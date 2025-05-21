import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType = 'neutral',
}) => {
  return (
    <div className="card animate-slide-up">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-muted">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold">{value}</h3>
          
          {change && (
            <div className="mt-2 flex items-center text-sm">
              <span
                className={`flex items-center ${
                  changeType === 'positive'
                    ? 'text-success'
                    : changeType === 'negative'
                    ? 'text-error'
                    : 'text-text-muted'
                }`}
              >
                {changeType === 'positive' ? (
                  <ArrowUp size={14} className="mr-1" />
                ) : changeType === 'negative' ? (
                  <ArrowDown size={14} className="mr-1" />
                ) : null}
                {change}
              </span>
              <span className="ml-1 text-text-muted">vs last month</span>
            </div>
          )}
        </div>
        
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;