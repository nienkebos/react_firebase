import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    //super:overwriting constructor, but still want the normal constructor things to happen...
    super(props);
    this.state = {
      data: null,
      newData: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //database.ref: create connection to db.
    //snapshot: one moment; abstracts over the data.
    //snapshot.val gets the data of that point in the tree
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
      //console.log('THE DATA CHANGED!', snapshot.val());
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref('/New Data')
            .push(this.state.newData);
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
          {/* { JSON.stringify(this.state.data, null, 2) } */}
        </pre>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
