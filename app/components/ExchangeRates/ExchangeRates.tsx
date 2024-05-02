'use client'
import React, { useEffect, useReducer } from 'react'
import { fetchExchangeRates } from '@/utils/getExchangeRate'
import { reducer } from '@/app/components/ExchangeReducer/ExchangeReducer'
import { initialState } from '@/app/components/Constants/Constants'

export default function ExchangeRates() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function fetchRates() {
            try {
                const exchangeRates = await fetchExchangeRates(
                    state.fromCurrency
                )
                dispatch({ type: 'SET_EXCHANGE_RATES', payload: exchangeRates })
            } catch (error: any) {
                dispatch({
                    type: 'FETCH_EXCHANGE_RATES_FAILURE',
                    payload: error.message
                })
            }
        }

        fetchRates()
    }, [state.fromCurrency])

    useEffect(() => {
        if (
            state.exchangeRates &&
            state.exchangeRates.rates[state.toCurrency]
        ) {
            const rate = state.exchangeRates.rates[state.toCurrency]
            dispatch({
                type: 'SET_CONVERTED_AMOUNT',
                payload: state.amount * rate
            })
        }
    }, [state.amount, state.exchangeRates, state.toCurrency])

    const handleFromCurrencyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch({ type: 'SET_FROM_CURRENCY', payload: event.target.value })
    }

    const handleToCurrencyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch({ type: 'SET_TO_CURRENCY', payload: event.target.value })
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value)
        dispatch({ type: 'SET_AMOUNT', payload: value })
    }

    return state.exchangeRates ? (
        <div>
            <div>
                <h2>Date: {state.exchangeRates.date}</h2>
            </div>
            <div>
                <label htmlFor="fromCurrency">From:</label>
                <select
                    id="fromCurrency"
                    value={state.fromCurrency}
                    onChange={handleFromCurrencyChange}
                >
                    {Object.keys(state.exchangeRates.rates).map(
                        (currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                        )
                    )}
                </select>
            </div>
            <div>
                <label htmlFor="toCurrency">To:</label>
                <select
                    id="toCurrency"
                    value={state.toCurrency}
                    onChange={handleToCurrencyChange}
                >
                    {Object.keys(state.exchangeRates.rates).map(
                        (currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                        )
                    )}
                </select>
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={state.amount}
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
                        <td>{state.fromCurrency}</td>
                        <td>{state.exchangeRates.rates[state.fromCurrency]}</td>
                    </tr>
                    <tr>
                        <td>{state.toCurrency}</td>
                        <td>{state.exchangeRates.rates[state.toCurrency]}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Converted Amount:</strong>{' '}
                {state.convertedAmount !== null
                    ? state.convertedAmount.toFixed(2)
                    : ''}
            </div>
        </div>
    ) : null
}
