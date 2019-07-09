import styled from 'styled-components'

export const Bullet = styled.div`
    width: 12px;
    height: 12px;
    border: 2px solid lightgrey;
    border-radius: 50%;
    margin-right: 1em;
`

export const Wrapper = styled.div`
    display: flex;
    flexDirection: row;
    align-items: center;
    font-family: Arial;
    font-size: 0.8em;
    margin: 0.5em 0;
    border-bottom: 1px solid lightgrey;
    padding: 1em 0;
`

export const Input = styled.input`
    border: none;
    padding-bottom: 0.5em 0;
    width: 100%;
    font-size: 1em;
    outline: none;
    color: palevioletred;
`

export const Form = styled.form`
    display: flex;
    flex: 1 1 auto;
`

export const Button = styled.button`
    color: ${props => props.disabled ? "lightgrey" : "palevioletred"};
    background: none;
    border: none;
`