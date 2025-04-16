import React, { useReducer } from 'react'

const CounterReducer = () => {
    const counterReducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return state + 1;
            case 'dec':
                return state - 1;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            <h3 className="text-2xl">useReducer</h3>
            <div className='my-4'>
                <span>{count}</span>
            </div>
            <button className='bg-green-500' onClick={() => dispatch({ type: 'inc' })}>Increment</button>
            <button className='bg-red-500' onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
        </div>
    )
}

export default CounterReducer