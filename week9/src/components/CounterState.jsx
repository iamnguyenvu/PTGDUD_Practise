import React from 'react'
import { useState } from 'react'

const CounterState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3 className="text-2xl">useState</h3>
            <div className='my-4'>
                <span>{count}</span>
            </div>
            <button className='bg-green-500' onClick={() => setCount(count +1, 0)}>Increment</button>
            <button className='bg-red-500' onClick={() => setCount(count -1)}>Decrement</button>
        </div>
    )
}

export default CounterState