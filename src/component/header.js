import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword:'' }
    }
    handleChange=(event)=>{
        this.setState({
            keyword:event.target.value
        },()=>this.props.affich(this.state.keyword));
        
        
    }
    // ToAff=(event)=>{
        
    // }
    render() { 
        const {filtr}=this.props
        return ( <div className='input_cont' style={{height:'80%'}}>
            <input className='input_val' type='text' onChange={this.handleChange} />
            <input className='button' type='button' value='Search' onClick={this.ToAff}/>
        </div> );
    }
}
 
export default Header;