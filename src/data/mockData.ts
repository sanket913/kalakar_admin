export interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  course: string;
  status: 'new' | 'contacted' | 'resolved';
  date: string;
}

// Empty submissions array since we're removing mock data
export const submissions: Submission[] = [];

// Empty recent submissions
export const recentSubmissions: Submission[] = [];

// Empty monthly submission data
export const monthlySubmissionData = [];

// Empty course interest data
export const courseInterestData = [];

// Empty stats
export const stats = [];