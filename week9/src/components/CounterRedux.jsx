import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const CounterRedux = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h3 className="text-2xl">Redux Toolkit</h3>
            <div className='my-4'>
                <span>{count}</span>
            </div>
            <button className='bg-green-500' onClick={() => dispatch(increment())}>Increment</button>
            <button className='bg-red-500' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default CounterRedux