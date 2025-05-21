import React from 'react';
import { Mail, Phone, BookOpen, Calendar } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  course: string;
  phone: string;
  createdAt: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get initials for the avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 text-blue-700 font-medium rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
            {getInitials(contact.name)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Submitted on {formatDate(contact.createdAt)}
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Mail size={16} className="text-gray-400 mr-3 flex-shrink-0" />
            <span className="text-gray-600 break-all">{contact.email}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Phone size={16} className="text-gray-400 mr-3 flex-shrink-0" />
            <span className="text-gray-600">{contact.phone || 'Not provided'}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <BookOpen size={16} className="text-gray-400 mr-3 flex-shrink-0" />
            <span className="text-gray-600">{contact.course}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;