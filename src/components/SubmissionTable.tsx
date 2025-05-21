import React from 'react';
import { Submission } from '../data/mockData';

interface SubmissionTableProps {
  submissions: Submission[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ submissions }) => {
  return (
    <div className="animate-fade-in">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-center py-8 text-text-muted">
                No submissions found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;