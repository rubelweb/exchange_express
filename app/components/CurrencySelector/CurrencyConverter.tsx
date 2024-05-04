import React from 'react';

interface Props {
  currencies: string[];
  selectedCurrency: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelector: React.FC<Props> = ({
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
