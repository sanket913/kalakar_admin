/**
 * Utility for exporting data to CSV format
 */

interface Contact {
  _id: string;
  name: string;
  email: string;
  course: string;
  phone: string;
  createdAt: string;
}

/**
 * Converts contact data to CSV format and triggers download
 * @param data Array of contact objects to export
 * @param filename Name of the CSV file (without extension)
 */
export const exportToCSV = (data: Contact[], filename: string): void => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  // CSV Headers
  const headers = [
    'Name',
    'Email',
    'Phone',
    'Course',
    'Submission Date'
  ];

  // Format the data rows
  const rows = data.map(contact => [
    escapeCsvValue(contact.name),
    escapeCsvValue(contact.email),
    escapeCsvValue(contact.phone),
    escapeCsvValue(contact.course),
    escapeCsvValue(formatDate(contact.createdAt))
  ]);

  // Combine headers and rows
  const csvContent = 
    headers.join(',') + '\n' + 
    rows.map(row => row.join(',')).join('\n');

  // Create a Blob with the CSV data
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a download link
  const link = document.createElement('a');
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Set link properties
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${formatDateForFilename(new Date())}.csv`);
  link.style.display = 'none';
  
  // Append link to body, click it, then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL object
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
};

/**
 * Escapes special characters for CSV format
 */
const escapeCsvValue = (value: string): string => {
  if (value === null || value === undefined) return '""';
  
  // Convert to string and escape double quotes
  const stringValue = String(value).replace(/"/g, '""');
  
  // Wrap in quotes if value contains commas, quotes, or newlines
  if (/[",\n\r]/.test(stringValue)) {
    return `"${stringValue}"`;
  }
  
  return stringValue;
};

/**
 * Formats a date string to a readable format
 */
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Format date for filename (YYYY-MM-DD)
 */
const formatDateForFilename = (date: Date): string => {
  return date.toISOString().split('T')[0];
};