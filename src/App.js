import React, { Component } from 'react';
import List from './component/list'
import Header from './component/header'
import Rating from './component/rating'
import Add  from './component/add'


import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      wordToSearch:'',
     rate:0,
     elt:{},
     isLoading:true
    }
  }
  affich=(word)=>{
  this.setState({wordToSearch:word})
  }
  recupRating=(rate)=>{
 this.setState({rate:rate})
  }
  elmtToAdd=(element)=>{
    this.setState({elt:element})
  }
  // load=()=>{
  //   setInterval(() => { setState({isLoading:false})},2000)
  // }

  
    
    intervald = setTimeout(
        () => { 
          this.setState({
            isLoading:false
          })
      },
        1000
      )
    

 
  render() {
    return (<div className="App">
    <div className="header">
      <Header affich={this.affich} />
      <div className='rate_comp'><Rating getrating={this.recupRating} /></div>
     </div> 
      <List  word={this.state.wordToSearch} rate={this.state.rate} element={this.state.elt}  isLoading={this.state.isLoading} />
      <Add elmtToAdd={this.elmtToAdd}/>
      

      
     </div>)
      
    ;
  }
}

export default App;
