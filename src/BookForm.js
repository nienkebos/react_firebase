import React, { Component } from 'react'

import { database } from './firebase'

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            author: '',
            user: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.user !== this.state.user) {
            this.setState({ user: nextProps.user.uid });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState((prevState, props) => {
            return {
                [name]: value,
            }
        });
        console.log(this.state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const currentUser = this.props.user;

        database.ref('/books')
                .push(this.state);
    }
    
    render() {
        return (
            <form className="App-form" onSubmit={this.handleSubmit}>
                Title:
                <input type="text" name="title" onChange={this.handleChange} />
                <br />
                Author:
                <input type="text" name="author" onChange={this.handleChange} />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default BookForm;