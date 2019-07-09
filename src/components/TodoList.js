import React from 'react'
import { Wrapper } from './TodoList.styles'

import TodoItem from './TodoItem'
import NewTodo from './NewTodo'

const TodoList = (props) => {
    const { todo, items, onChange, onSubmit } = props
    return (
        <Wrapper>
            {items.map((todo, index) => {
                return (
                    <TodoItem todo={todo} key={index} />
                )
            })}
            <NewTodo todo={todo} onChange={onChange} onSubmit={onSubmit} />
        </Wrapper>
    )
}

export default TodoList