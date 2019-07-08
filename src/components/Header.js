import React from 'react'

const Header = (props) => {
    const { name, signOut } = props
    return (
        <div>
            <button onClick={() => signOut()}>Sign Out</button>
            <header className="App-header">
              <h1>Hey {name}</h1>
              <h4>this is your to-do list</h4>
            </header>
        </div>
    )
}

export default Header