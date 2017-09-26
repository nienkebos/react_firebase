import React, { Component } from 'react';
import { auth, database } from './firebase';
import './App.css';

import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import BooksList from './BooksList';
import BookForm from './BookForm';

// import map from 'lodash/map';

class App extends Component {
  constructor(props) {
    //super:overwriting constructor, but still want the normal constructor things to happen...
    super(props);
    this.state = {
      currentUser: null,
      books: null,

    };
  
    this.bookRef = database.ref('/books');
  }

  componentDidMount() {
    //database.ref: create connection to db.
    //snapshot: one moment; abstracts over the data.
    //snapshot.val gets the data of that point in the tree
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
      this.bookRef.on('value', (snapshot) => {
        this.setState({ books: snapshot.val() });
      })
    })
  }

  render() {
    const { currentUser, books } = this.state; //pulls currentUser of the state object

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactfire</h2>
        </div>

        <div>
          { !currentUser && <SignIn /> }
          { currentUser && <CurrentUser user={ currentUser } /> }
        </div>
        <BooksList books={ books } user={ currentUser } />
        <BookForm user={ currentUser } />

      </div>
    );
  }
}

export default App;
