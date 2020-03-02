import React, { Component } from 'react'

export default class DefaultQuote extends Component {
    render() {
        var defaultitems = this.props.defaultquotes.map((dq,ind)=>{
            return (<DefaultQuote key={ind} defaultquote={dq}/>)
        return (
            <div>
                
                
            </div>
        )
    }
}
