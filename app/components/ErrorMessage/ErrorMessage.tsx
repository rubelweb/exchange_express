import React from 'react';
import { ErrorMessageProps } from '@/utils/types'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div>Error: {message}</div>;
};

export default ErrorMessage;
