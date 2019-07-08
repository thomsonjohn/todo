import React from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: 'zen-todo.firebaseapp.com'
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        user
      })
    })
  }

  render() {
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }

    return (
      <div className="App">
        {this.state.isSignedIn ?
          <div>
            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
            <header className="App-header">
              <h1>Hey {this.state.user.displayName}</h1>
              <h4>this is your to-do list</h4>
            </header>
            <div className="todo-list">
              <p>Feed the raptors</p>
              <p>Wash time machine</p>
              <p>Meditate</p>
              <p>Do some yoga</p>
            </div>
          </div>
          :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        }
        
      </div>
    );
  }
  
}

export default App;
