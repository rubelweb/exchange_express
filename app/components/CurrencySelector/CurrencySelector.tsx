import React from 'react'
import { CurrencySelectorProps } from '@/utils/types'

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
    currencies,
    selectedCurrency,
    onChange
}) => {
    return (
        <div className="flex items-center">
            <label htmlFor="currency-selector" className="mr-2 text-teal-700">
                Select Currency:
            </label>
            <select
                id="currency-selector"
                className="bg-white border border-teal-300 rounded p-2"
                value={selectedCurrency}
                onChange={onChange}
            >
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CurrencySelector
