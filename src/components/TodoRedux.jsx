//todoRedux is only for learning purpose this is not part of movies app
import {useSelector, useDispatch} from 'react-redux'
import {addtask, setValue} from '../redux/todoSlices.js'

function TodoRedux() {

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setValue(e.target.value));
    }
    const {value, todoList} = useSelector((state) => state.todo);

    const handleAdd = () => {
        dispatch(addtask());
    }
    const list = []
    return (
        <>
            <h2>Todo</h2>
            <div>
                <input onChange={handleChange} value={value} type="text" placeholder="Add todo" />
                <button onClick={handleAdd}>Add</button>

            </div>
            <div>
                <ul>
                    {list.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))} 
                </ul>
            </div>
        </>
    )
}

export default TodoRedux;