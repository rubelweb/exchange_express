import ExchangeRates from '@/app/components/ExchangeRates/ExchangeRates'

export default function Home() {
    return (
        <main>
            <h2 style={{ fontWeight: 'bold' }}>Currency Converter</h2>
            <ExchangeRates baseCurrency="USD" />
        </main>
    )
}
