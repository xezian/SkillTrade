import React, { Component } from 'react';
import API from '../../utils/API'

getUser => {
  
}

getSender => {

}

export class Messages extends Component  {
  
  render(){
  const { user, receiver, date, message } = this.props
    return(
  <div>
    
    <h4 style={{ textAlign: 'center' }}>Here are messages</h4>
  </div>
    )
  }
};

export default Messages;
