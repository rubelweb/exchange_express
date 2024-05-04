export interface AmountInputProps {
    amount: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export interface CurrencySelectorProps {
    currencies: string[];
    selectedCurrency: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

export interface ErrorMessageProps {
    message: string;
  }

export interface ExchangeRateTableProps {
    rates: { [key: string]: number };
    fromCurrency: string;
    toCurrency: string;
  }

export interface Action {
    type: string
    payload: any
}

export interface State {
    exchangeRates: any | null
    fromCurrency: string
    toCurrency: string
    amount: number
    convertedAmount: number | null,
    error: null,
    isLoading: false
}
