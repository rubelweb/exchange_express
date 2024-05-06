import React from 'react'
import { AmountInputProps } from '@/utils/types'

const AmountInput: React.FC<AmountInputProps> = ({ amount, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value)
        onChange(value)
    }

    return (
        <div className="flex items-center">
            <label htmlFor="amount" className="mr-2 text-teal-700">
                Amount:
            </label>
            <input
                type="number"
                id="amount"
                data-testid="amount"
                value={amount}
                onChange={handleChange}
                className="bg-white border border-teal-300 rounded p-2 w-32"
            />
        </div>
    )
}

export default AmountInput
