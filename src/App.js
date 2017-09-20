import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    //super:overwriting constructor, but still want the normal constructor things to happen...
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    //database.ref: create connection to db.
    //snapshot: one moment; abstracts over the data.
    // snapshot.val gets the data of that point in the tree
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
      // console.log('THE DATA CHANGED!', snapshot.val());
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactfire</h2>
        </div>
        <p className="App-intro">
          Rebuilding my app in react... let's see what happens!
        </p>
        <pre className="App-data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
      </div>
    );
  }
}

export default App;
