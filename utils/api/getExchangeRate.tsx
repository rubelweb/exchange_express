export const fetchExchangeRates = async (baseCurrency: string) => {
    const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    )
    if (!response.ok) {
        throw new Error('Failed to fetch currency rates')
    }
    return await response.json()
}
