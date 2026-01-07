import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className='p-3 m-3 border-gray-400' onClick={() => dispatch(increment())}>Increment</button> //immer.js allows us to write mutating logic in reducers. It doesn't actually mutate the state because it uses the immer library to detect changes to a "draft state" and produce a brand new immutable state based off those changes
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;