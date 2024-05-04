import React from 'react'
import { ExchangeRateTableProps } from '@/utils/types'

const ExchangeRateTable: React.FC<ExchangeRateTableProps> = ({
    rates,
    fromCurrency,
    toCurrency
}) => {
    return (
        <div className="bg-teal-60 p-4 mt-2 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Exchange Rates</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-teal-700 text-white">
                        <th className="py-2 px-4">Currency</th>
                        <th className="py-2 px-4">Exchange Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-teal-500">
                        <td className="py-2 px-4">{fromCurrency}</td>
                        <td className="py-2 px-4">{rates[fromCurrency]}</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">{toCurrency}</td>
                        <td className="py-2 px-4">{rates[toCurrency]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExchangeRateTable
