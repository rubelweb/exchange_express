import React from 'react';

interface ExchangeRateTableProps {
  rates: { [key: string]: number };
  fromCurrency: string;
  toCurrency: string;
}

const ExchangeRateTable: React.FC<ExchangeRateTableProps> = ({ rates, fromCurrency, toCurrency }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Exchange Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{fromCurrency}</td>
          <td>{rates[fromCurrency]}</td>
        </tr>
        <tr>
          <td>{toCurrency}</td>
          <td>{rates[toCurrency]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExchangeRateTable;
