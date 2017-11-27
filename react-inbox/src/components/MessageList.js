import React from 'react';
import Message from './Message'
import Toolbar from './Toolbar';


const MessageList = ({data}) => {
  // console.log(data)
    return(
    <div>
      {data.map( data => <Message key={data.id} data={data} /> )}
   </div>

   )
  }


export default MessageList
