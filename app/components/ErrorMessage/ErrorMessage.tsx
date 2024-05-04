import React from 'react';
import { ErrorMessageProps } from '@/utils/types'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="bg-red-500 text-white p-4 rounded">Error: {message}</div>;
};

export default ErrorMessage;
