import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <h2>{count}</h2> */}
            <button className='absolute bottom-0 border-gray-100' onClick={() => dispatch(increment())}></button>
            <button onClick={() => dispatch(decrement())}></button>
        </div>
    );
}

export default Counter;