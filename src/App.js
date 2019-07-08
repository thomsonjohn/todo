import React from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Header from './components/Header'
import TodoList from './components/TodoList'

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
            <Header name={this.state.user.displayName} signOut={() => firebase.auth().signOut()} />
            <TodoList />
          </div>
          :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        }
        
      </div>
    );
  }
  
}

export default App;
