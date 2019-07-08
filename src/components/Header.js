import React from 'react'
import { Wrapper, Heading, SubHeading, Image } from './Header.styles'

const Header = (props) => {
    const { image, name, signOut } = props
    return (
        <Wrapper>
            <header className="App-header">
              <Heading>Hey {name}</Heading>
              <SubHeading>this is your to-do list</SubHeading>
            </header>
            <Image src={image} alt="user profile" onClick={() => signOut()} />
        </Wrapper>
    )
}

export default Header