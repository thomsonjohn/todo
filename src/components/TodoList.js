import React from 'react'

import TodoItem from './TodoItem'

const todoItems = ['feed the raptors', 'wash time machine', 'meditate', 'do some yoga']

const TodoList = () => {
    return (
        <div className="todo-list">
            {todoItems.map(todo => {
                return (
                    <TodoItem todo={todo} />
                )
            })}
        </div>
    )
}

export default TodoList