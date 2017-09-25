import React, { Component } from 'react';
import map from 'lodash/map';

import BookDetails from './BookDetails'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookDetailsVisible: false
        }
        this.selectBook = this.selectBook.bind(this);
    }

    selectBook(book) {
        this.setState({bookDetailsVisible: !this.state.bookDetailsVisible})
    }

    render() {
        const book = this.props;
        
        return (
            <div className="Book">                
                { 
                    this.state.bookDetailsVisible 
                    ? <BookDetails { ...book }/> 
                    : <div>
                        <p>{book.title}</p>
                        <button onClick={() => this.selectBook() }>Details</button> 
                      </div>

                }

                {/* { book.ratings && map(book.ratings, (rating, key) => { return <Ratings key={key} { ...rating }/> }) } */}
                {/* <ul>

                    { book.ratings && map(book.ratings, (rating, key) => <li key={key}>{ rating }</li> )}
                </ul> */}
            </div>
        )
    }
}

export default Book;