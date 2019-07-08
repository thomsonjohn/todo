import React from 'react'
import { Bullet, Wrapper } from './TodoItem.styles'

const TodoItem = (props) => {
    const { todo } = props
    return (
        <Wrapper>
            <Bullet />
            {todo}
        </Wrapper>
    )
}

export default TodoItem