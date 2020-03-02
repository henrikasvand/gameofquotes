import React, { Component } from 'react'
import QuoteList from './QuoteList'
import QuoteForm from './QuoteForm'
import uuid from 'react-uuid'
import { getQuotes, addQuoteData, deleteAll, deleteOne } from './ServiceClient'


// var quotes = [{ id: 1, author: "Ygritte", quotetext: "You know nothing, Jon Snow!" },
// { id: 2, author: "Tyrion Lannister", quotetext: "It’s not easy being drunk all the time. If it were easy, everyone would do it." },
// {id: 3, author:"Hodor", quotetext:"Hodor!!"},
// {id: 4,author:"Danerys Targaryen", quotetext:"I will take what is mine with fire and blood."}]


export default class QuoteBox extends Component {
    state = { quotes: [] }

    getQuotesDB = async () => {
        let jotain = await getQuotes()
        this.setState({ quotes: jotain });
    }

    addQuoteDB = async (data) => {
        await addQuoteData(data);
        this.getQuotesDB();
    }

    deleteAllDB = async () => {
        await deleteAll();
        this.getQuotesDB();
    }

    componentDidMount() {
        this.getQuotesDB();
    }


    addQuote = q => {
        q.id = uuid();
        this.state.quotes.push(q);
        this.setState(this.state);
        console.log(this.state);
        this.addQuoteDB(q);
    }

    removeQuoteDB = async (id) => {
        await deleteOne(id);
        this.getQuotesDB();
    }


    removeQuote = (idToRemove) => {
        //find the index of the quote to remove
        var ind = this.state.quotes.findIndex((q) => q.id === idToRemove);
        //remove based on the index
        this.state.quotes.splice(ind, 1);
        this.setState(this.state);
        this.removeQuoteDB(idToRemove);
    }

    changeQuote = (id) => {
        var ind = this.state.quotes.findIndex((q) => q.id === id);
        console.log(ind);
    }

    render() {
        return (
            <div>
                <QuoteForm addQuote={this.addQuote} deleteAllDB={this.deleteAllDB} />
                <QuoteList quotes={this.state.quotes} removeQuote={this.removeQuote} changeQuote={this.changeQuote} />
            </div>
        )
    }
}


// var defaultquotes = [{ id: 1, author: "Ygritte", quotetext: "You know nothing, Jon Snow!" }]