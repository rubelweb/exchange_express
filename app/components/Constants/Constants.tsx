import { State } from '@/utils/types'

export const initialState: State = {
    exchangeRates: null,
    fromCurrency: 'USD',
    toCurrency: 'SEK',
    amount: 1,
    convertedAmount: null,
    error: null,
    isLoading: false
}
