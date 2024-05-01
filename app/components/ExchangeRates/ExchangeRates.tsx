'use client'

import React, { useEffect, useState } from 'react'
import { fetchExchangeRates } from '@/utils/api/getExchangeRate'

interface ExchangeRatesProps {
    baseCurrency: string
}

export default function ExchangeRatesComponent({
    baseCurrency
}: ExchangeRatesProps) {
    const [exchangeRates, setExchangeRates] = useState<any>(null)
    const [fromCurrency, setFromCurrency] = useState<string>(baseCurrency)
    const [toCurrency, setToCurrency] = useState<string>('EUR')
    const [amount, setAmount] = useState<number>(1)
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null)

    useEffect(() => {
        async function fetchRates() {
            try {
                const data = await fetchExchangeRates(fromCurrency)
                setExchangeRates(data)
            } catch (error) {
                console.error('Error fetching exchange rates:', error)
            }
        }

        fetchRates()
    }, [fromCurrency])

    useEffect(() => {
        if (exchangeRates && exchangeRates.rates[toCurrency]) {
            const rate = exchangeRates.rates[toCurrency]
            setConvertedAmount(amount * rate)
        }
    }, [amount, exchangeRates, toCurrency])

    const handleFromCurrencyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFromCurrency(event.target.value)
    }

    const handleToCurrencyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setToCurrency(event.target.value)
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value)
        setAmount(value)
    }

    return exchangeRates ? (
        <div>
            <div>
                <label htmlFor="fromCurrency">From:</label>
                <select
                    id="fromCurrency"
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                >
                    {Object.keys(exchangeRates.rates).map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="toCurrency">To:</label>
                <select
                    id="toCurrency"
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                >
                    {Object.keys(exchangeRates.rates).map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
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
                        <td>{exchangeRates.rates[fromCurrency]}</td>
                    </tr>
                    <tr>
                        <td>{toCurrency}</td>
                        <td>{exchangeRates.rates[toCurrency]}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Converted Amount:</strong>{' '}
                {convertedAmount !== null ? convertedAmount.toFixed(2) : ''}
            </div>
        </div>
    ) : null
}
