import axios from 'axios'

const getQuotes = async ()=>{
    let haeNytPrkl= await axios.get('api/quotes');
    return haeNytPrkl.data;
}

const addQuoteData = async (data)=>{
    await axios.post('api/quotes', data)
    return console.log(data);
}

const deleteAll = async ()=>{
    await axios.delete('api/quotes');
    console.log("Everything has been deleted!");
}

const deleteOne =async (data) =>{
    await axios.delete(`api/quotes/${data}`)
}

export {getQuotes,addQuoteData, deleteAll, deleteOne};