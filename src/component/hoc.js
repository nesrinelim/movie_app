import React, { Component } from 'react';
import Loading from './loading'
const hoc = WrappedComponnent  =>{
   return  class Hoc extends Component {
       
        
        render() { 
             const {isLoading}=this.props
            if(isLoading===true)return <Loading/>
           else return ( <WrappedComponnent /> );
        }
    }
     
    

}
export default hoc;