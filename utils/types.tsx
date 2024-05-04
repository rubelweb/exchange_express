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
