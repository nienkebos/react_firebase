import React, { Component } from 'react';

import BookDetails from './BookDetails'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsVisible: false
        }
        this.showDetails = this.showDetails.bind(this);
    }

    showDetails(book) {
        this.setState({ detailsVisible: !this.state.detailsVisible })
    }

    render() {
        const book = this.props;
        
        return (
            <div className="Book">                
                { 
                    this.state.detailsVisible 
                    ? <div>
                        <BookDetails { ...book }/>
                        <button onClick={ () => this.showDetails() }>Show less</button> 
                      </div>
                    : <div>
                        <h1>{book.title}</h1>
                        <button onClick={ () => this.showDetails() }>Show details</button> 
                      </div>
                }
            </div>
        )
    }
}

export default Book;