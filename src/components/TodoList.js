import React from 'react'
import { Wrapper } from './TodoList.styles'

import TodoItem from './TodoItem'

const todoItems = ['feed the raptors', 'wash time machine', 'meditate', 'do some yoga']

const TodoList = () => {
    return (
        <Wrapper>
            {todoItems.map(todo => {
                return (
                    <TodoItem todo={todo} />
                )
            })}
        </Wrapper>
    )
}

export default TodoList