import React, { Component } from 'react'
import { deleteAll } from './ServiceClient';


export default class QuoteForm extends Component {
    state = { author: '', quotetext: '' };
    newAuthor = (e) => { this.setState({ author: e.target.value }); }
    newQuotetext = (e) => { this.setState({ quotetext: e.target.value }); }
    buttonClick=(e)=> {
        e.preventDefault();
        this.props.addQuote({...this.state});
        this.setState({author:'',quotetext:''})
    }
    deleteButt=(e)=>{
        e.preventDefault();
        this.props.deleteAllDB();
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Hodor"
                        value={this.state.author} onChange={this.newAuthor} />
                    <input type="text" placeholder="Hodor!"
                        value={this.state.quotetext} onChange={this.newQuotetext} />
                    <button type="button" value="Add Quote" onClick={this.buttonClick} >Add Quote </button>
                    <button type="button" value="Delete All" onClick={this.deleteButt}>Dracarys!</button>
                    <p><em>"Dracarys!" disintegrates everything. Be mindful about it. Don't let the power get to your head!</em></p>
                    
                    
                </form>
            </div>
        )
    }
}
