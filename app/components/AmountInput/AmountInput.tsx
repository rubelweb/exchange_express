import React from 'react';
import { AmountInputProps } from '@/utils/types';

const AmountInput: React.FC<AmountInputProps> = ({ amount, onChange }) => {
  return <input type="number" value={amount} onChange={onChange} />;
};

export default AmountInput;
