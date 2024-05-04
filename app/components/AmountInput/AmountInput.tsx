import React from 'react';

interface Props {
  amount: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmountInput: React.FC<Props> = ({ amount, onChange }) => {
  return <input type="number" value={amount} onChange={onChange} />;
};

export default AmountInput;
