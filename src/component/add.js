import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { info_titl:'' }
    }
     myFunction=()=> {
         this.props.elmtToAdd({title: prompt("title", ""), 
                               img: prompt("Url_image", ""),
                               rating: prompt("rating", "")})
      }
    render() { 
        return ( <div>
            {/* <input type='button' onClick={this.myFunction}><img src='http://www.clker.com/cliparts/H/5/m/x/b/D/add-md.png'/></input> */}
            <button onClick={this.myFunction} style={{background:'white'}} ><img src='http://www.clker.com/cliparts/H/5/m/x/b/D/add-md.png' height='100%'width='80%' ></img></button>
            </div> );
    }
}
 
export default Add;