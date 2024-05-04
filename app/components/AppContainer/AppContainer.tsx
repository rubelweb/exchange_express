import React from 'react'
import Header from '@/app/components/Header/Header'
import CurrencyConverter from '@/app/components/CurrencyConverter/CurrencyConverter'

const AppContainer = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-teal-900 p-10 rounded-lg shadow-lg">
                <Header />
                <CurrencyConverter />
            </div>
        </div>
    )
}

export default AppContainer
