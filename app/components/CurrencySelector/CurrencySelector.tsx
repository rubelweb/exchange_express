import React from 'react';
import { CurrencySelectorProps } from '@/utils/types'


const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencies,
  selectedCurrency,
  onChange,
}) => {
  return (
    <select value={selectedCurrency} onChange={onChange}>
      {currencies.map((currency, index) => (
        <option key={index} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
