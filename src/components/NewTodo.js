import React from 'react'
import { Bullet, Wrapper, Input, Form, Button } from './TodoItem.styles'

const NewTodo = (props) => {
    const { todo, onChange, onSubmit } = props
    return (
        <Wrapper>
            <Bullet />
            <Form onSubmit={onSubmit}>
                <Input value={todo} type="text" placeholder="add todo" onChange={onChange} />
                <Button disabled={todo.length === 0}>Add</Button>
            </Form>
            
        </Wrapper>
    )
}

export default NewTodo