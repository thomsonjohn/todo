import React from 'react'

const TodoItem = (props) => {
    const { todo } = props
    return (
        <div>
            {todo}
        </div>
    )
}

export default TodoItem