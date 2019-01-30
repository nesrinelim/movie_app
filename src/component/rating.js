import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
import './rating.css'
 
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
  
  onStarClick(nextValue) {
   
    this.setState({rating: nextValue},()=>this.props.getrating(this.state.rating));
  }
  // recupRating=()=>{
    
  // }
  render() {
    
    const { ratingp} = this.props;
    return (                
      <div className='rating_block'>
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={ratingp}
          onStarClick={this.onStarClick.bind(this)}
          
        />
      </div>
    );
  }
}
 
// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );
export default Rating;