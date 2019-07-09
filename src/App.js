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
      isSignedIn: false,
      items: ['feed the raptors', 'wash time machine', 'meditate', 'do some yoga'],
      todo: ''
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

  onChange = (event) => {
    this.setState({ todo: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todo: '',
      items: [...this.state.items, this.state.todo]
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
            <Header 
              image={this.state.user.photoURL} 
              name={this.state.user.displayName.split(' ')[0]}
              signOut={() => firebase.auth().signOut()} 
            />
            <TodoList todo={this.state.todo} items={this.state.items} onChange={this.onChange} onSubmit={this.onSubmit} />
          </div>
          :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        }
        
      </div>
    );
  }
  
}

export default App;
