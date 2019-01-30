import React, { Component } from 'react';
import * as _b_ from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './item.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item,rating}=this.props
        return ( 
    <div>
        
        <_b_.Col xs={6} md={4}>
           <_b_.Thumbnail      >
              
           <img className='image' src={item.img} width="220px" height='270px' />
           
                <h3>{item.title}</h3>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    // onStarClick={this.onStarClick.bind(this)}
                 />
                
          </_b_.Thumbnail>
        </_b_.Col>


       
    </div>
         );
    }
}
 
export default Item;