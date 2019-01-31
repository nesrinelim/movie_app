import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import './loading.css'
export default class Loading extends Component {
  render() {
  return (
      <div className='load'>
        <Spinner size={80} spinnerColor={"#1333"} spinnerWidth={2} visible={true} />
      </div>
    );
  }
}
