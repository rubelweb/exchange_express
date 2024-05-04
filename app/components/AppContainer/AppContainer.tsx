import React from 'react';
import Header from '@/app/components/Header/Header';
import CurrencyConverter from '@/app/components/CurrencyConverter/CurrencyConverter';

const AppContainer = () => {
  return (
    <div>
      <Header />
      <CurrencyConverter />
    </div>
  );
};

export default AppContainer;
