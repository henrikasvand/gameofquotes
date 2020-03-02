import React, { Component } from 'react'
import Quote from './Quote'


export default class QuoteList extends Component {
    render() {

        var listitemit = this.props.quotes
            .sort(function (s1, s2) {
                return s2.id - s1.id;
            })
            .map((q, ind) => {
                return (<Quote quotes={q} removeQuote={this.props.removeQuote} key={q.id} changeQuote={ this.props.changeQuote} />)
            })
        return (
            <div>
                <h3>Quotes</h3>
                {listitemit}

            </div>
        )
    }
}