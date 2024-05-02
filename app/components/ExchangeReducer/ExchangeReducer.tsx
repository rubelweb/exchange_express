import { Action, State } from '@/utils/types'

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_EXCHANGE_RATES':
            return { ...state, exchangeRates: action.payload }
        case 'SET_FROM_CURRENCY':
            return { ...state, fromCurrency: action.payload }
        case 'SET_TO_CURRENCY':
            return { ...state, toCurrency: action.payload }
        case 'SET_AMOUNT':
            return { ...state, amount: action.payload }
        case 'SET_CONVERTED_AMOUNT':
            return { ...state, convertedAmount: action.payload }
        case 'FETCH_EXCHANGE_RATES_FAILURE':
            return { ...state, error: action.payload }
        default:
            return state
    }
}
