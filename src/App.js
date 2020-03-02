import React from 'react';
import logo from './dragond.png';
import './App.css';
import QuoteBox from './QuoteBox'
import * as Tone from "tone";
import { Synth } from "tone";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button id="button" onClick={PlayTone()}>Ta taa, tata ta taa, tata ta taa!</button>
        <QuoteBox/>
      </header>
    </div>
  );
  }


let synth;

function PlayTone(){
  Tone.Transport.bpm.value = 120;
  synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
}


export default App;
