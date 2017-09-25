import React, { Component } from 'react';
import { database } from './firebase';
import map from 'lodash/map'; // lodash map omdat de bookslist een object , dus zou je het eerst naar een array of books moeten omzetten.

import Book from './Book'


class BooksList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.setTimeout(()=>{
            console.log("HI", this.props)
        }, 2000)
    }


    // handleSelect(key) {
    //     const currentUser = this.props.user;
    //     database.ref('/books')
    //             .child(key)
    //             .child('ratings')
    //             .child(currentUser.uid)
    //             .set(currentUser.displayName);
    // }
    // handleDeselect(key) {
    //     const currentUser = this.props.user;        
    //     database.ref('/books')
    //             .child(key)
    //             .child('ratings')
    //             .child(currentUser.uid)
    //             .remove();
    // }

    render() {
        const books = this.props.books
        return (
            <div className="BooksList">
                {/* value and key to map over the entries in the database */}
                { map(books, (book, key) => { return <Book key={key} { ...book }/> }) }
            </div>
        )
    }
}

export default BooksList;