import React from 'react'
import { render } from '@testing-library/react'
import ExchangeRateTable from '@/app/components/ExchangeRateTable/ExchangeRateTable'

const mockRates = { USD: 1, SEK: 10.5 }

test('renders exchange rates for from and to currencies', () => {
    const { getByText } = render(
        <ExchangeRateTable
            rates={mockRates}
            fromCurrency="USD"
            toCurrency="SEK"
        />
    )
    expect(getByText('USD')).toBeTruthy()
    expect(getByText('SEK')).toBeTruthy()
    expect(getByText(mockRates.USD.toString())).toBeTruthy()
    expect(getByText(mockRates.SEK.toString())).toBeTruthy()
})
