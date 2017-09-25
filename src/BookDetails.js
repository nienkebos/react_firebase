import React, { Component } from 'react';
import map from 'lodash/map';

import Ratings from './Ratings'

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        const book = this.props;        
        console.log("Bookdetail", book)
    }

    render() {
        const book = this.props;
        
        return (
            <div className="Book">
                <h1>{ book.title }</h1>
                <h3>{ book.author }</h3>
                { book.ratings && map(book.ratings, (rating, key) => { return <Ratings key={key} { ...rating }/> }) }
            </div>
        )
    }
}

export default BookDetails;