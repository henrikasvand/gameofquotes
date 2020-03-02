import React, { Component } from 'react'

export default class Quote extends Component {
    removeQuote= ()=>{
        this.props.removeQuote(this.props.quotes.id);
    }
    changeQuote= ()=>{
        this.props.changeQuote(this.props.quotes.id);
    }
    render() {
        return (
            <div>
                    <p>author:{this.props.quotes.author}:</p>
                    <p>quote: "{this.props.quotes.quotetext}"</p>
                    <p>
                        <button type="button" onClick={this.removeQuote}>Remove</button> <button type="button" value="Change Quote" onClick={this.changeQuote}>Change Quote</button>
                        
                    </p>
            </div>
        )
    }
}
