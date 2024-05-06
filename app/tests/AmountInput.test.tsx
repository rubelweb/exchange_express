import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AmountInput from '@/app/components/AmountInput/AmountInput'

test('amount input should update state on change', () => {
    const mockChangeHandler = jest.fn()
    const { getByTestId } = render(
        <AmountInput amount={1} onChange={mockChangeHandler} />
    )

    const input = getByTestId('amount')
    fireEvent.change(input, { target: { value: 10 } })

    expect(mockChangeHandler).toHaveBeenCalledWith(10)
})
