import { initialState } from '@/app/components/Constants/Constants'
import { reducer } from '@/app/components/ExchangeReducer/ExchangeReducer'
jest.mock('@/utils/getExchangeRate')
import '@testing-library/jest-dom'

test('Initial state should be set correctly', () => {
    expect(initialState).toEqual({
        exchangeRates: null,
        fromCurrency: 'USD',
        toCurrency: 'SEK',
        amount: 1,
        convertedAmount: null,
        error: null,
        isLoading: true
    })
})

test('Reducer should update fromCurrency', () => {
    const newCurrency = 'EUR'
    const action = { type: 'SET_FROM_CURRENCY', payload: newCurrency }

    const newState = reducer(initialState, action)

    expect(newState.fromCurrency).toBe(newCurrency)
})

test('Reducer should update amount', () => {
    const newAmount = 100
    const action = { type: 'SET_AMOUNT', payload: newAmount }

    const newState = reducer(initialState, action)

    expect(newState.amount).toBe(newAmount)
})

test('Reducer should update convertedAmount', () => {
    const newConvertedAmount = 123.45
    const action = { type: 'SET_CONVERTED_AMOUNT', payload: newConvertedAmount }

    const newState = reducer(initialState, action)

    expect(newState.convertedAmount).toBe(newConvertedAmount)
})

test('Reducer should update error state', () => {
    const errorMessage = 'Failed to fetch currency rates'
    const action = {
        type: 'FETCH_EXCHANGE_RATES_FAILURE',
        payload: errorMessage
    }

    const newState = reducer(initialState, action)

    expect(newState.error).toBe(errorMessage)
})
