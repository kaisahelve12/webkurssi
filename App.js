import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.nappiClicked = this.nappiClicked.bind(this);
    this.state={
      
      laskuri: 0,
  }
  
}
buttonClicked()
{
  this.setState((prevState)=>({laskuri:prevState.laskuri+1}));
  
}
nappiClicked()
{
  this.setState((prevState)=>({laskuri:prevState.laskuri-prevState.laskuri}));
}


render(){
  //let vari = {color : 'black', };
  //if(this.state.laskuri > 10)
  //vari = {color : 'red', fontWeight: 'bold'};

    return(
      <div>
        <button onClick={this.buttonClicked}>Lisää</button>
        <button onClick={this.nappiClicked}>Nollaa</button>
        {
          //<p >Laskuri on <span style={vari}>{this.state.laskuri}</span></p>
        }
        <MuutaVari arvo={this.state.laskuri}/>

      </div>
    )
  }
}

function MuutaVari(props) {
  let vari = {color : 'black'};
  if(props.arvo > 10)
  vari = {color : 'red', fontWeight: 'bold'};
  return <p>Laskuri on <span style={vari}>{props.arvo}</span></p>;
}


export default App;
