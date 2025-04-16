import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoRedux = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch()
  return (
    <div>
        <h3 className="text-2xl">TodoList Redux</h3>

    </div>
  )
}

export default TodoRedux