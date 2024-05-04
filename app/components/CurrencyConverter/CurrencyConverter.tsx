'use client'

import React, { useEffect, useReducer, ChangeEvent } from 'react'
import { fetchExchangeRates } from '@/utils/getExchangeRate'
import { reducer } from '@/app/components/ExchangeReducer/ExchangeReducer'
import { initialState } from '@/app/components/Constants/Constants'
import LoadingSpinner from '@/app/components/LoadingSpinner/LoadingSpinner'
import CurrencySelector from '@/app/components/CurrencySelector/CurrencySelector'
import AmountInput from '@/app/components/AmountInput/AmountInput'
import ExchangeRateTable from '@/app/components/ExchangeRateTable/ExchangeRateTable'
import ErrorMessage from '@/app/components/ErrorMessage/ErrorMessage'

const CurrencyConverter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const {
        exchangeRates,
        fromCurrency,
        toCurrency,
        amount,
        convertedAmount,
        error,
        isLoading
    } = state

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const data = await fetchExchangeRates(fromCurrency)
                dispatch({ type: 'SET_EXCHANGE_RATES', payload: data })
            } catch (error) {
                dispatch({
                    type: 'FETCH_EXCHANGE_RATES_FAILURE',
                    payload: 'Failed to fetch currency rates'
                })
            }
        }

        fetchRates()
    }, [fromCurrency])

    useEffect(() => {
        if (exchangeRates && exchangeRates.rates[toCurrency]) {
            const rate = exchangeRates.rates[toCurrency]
            dispatch({ type: 'SET_CONVERTED_AMOUNT', payload: amount * rate })
        }
    }, [amount, exchangeRates, toCurrency])

    const handleFromCurrencyChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch({ type: 'SET_FROM_CURRENCY', payload: event.target.value })
    }

    const handleToCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'SET_TO_CURRENCY', payload: event.target.value })
    }

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value)
        dispatch({ type: 'SET_AMOUNT', payload: value })
    }

    return (
        <div>
            {error && <ErrorMessage message={error} />}
            {isLoading && <LoadingSpinner />}
            {exchangeRates && (
                <>
                    <div>
                        <h2>Date: {exchangeRates.date}</h2>
                    </div>
                    <div>
                        <label htmlFor="fromCurrency">From:</label>
                        <CurrencySelector
                            currencies={Object.keys(exchangeRates.rates)}
                            selectedCurrency={fromCurrency}
                            onChange={handleFromCurrencyChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="toCurrency">To:</label>
                        <CurrencySelector
                            currencies={Object.keys(exchangeRates.rates)}
                            selectedCurrency={toCurrency}
                            onChange={handleToCurrencyChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount:</label>
                        <AmountInput
                            amount={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <ExchangeRateTable
                        rates={exchangeRates.rates}
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                    />
                    <div>
                        <strong>Converted Amount:</strong>{' '}
                        {convertedAmount !== null
                            ? convertedAmount.toFixed(2)
                            : ''}
                    </div>
                </>
            )}
        </div>
    )
}

export default CurrencyConverter
