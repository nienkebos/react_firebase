import React, { Component } from 'react';
// import map from 'lodash/map';


class Ratings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        // console.log("BOEKEN", book.ratings)

    }

    render() {
        const rating = this.props;
        console.log("Ratings", rating)
        
        return (
            <div className="Rating">
                <ul>
                    <li>{ rating.title }</li>
                    <li>{ rating.rating }</li>
                    <li>{ rating.comment }</li>
                    {/*TODO: User Component <li>{ rating.user }</li>  */} 
                </ul>
            </div>
        )
    }
}

export default Ratings;