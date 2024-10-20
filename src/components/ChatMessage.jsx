import React from 'react'
import usericon from "/usericon.png";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className="h-8"
        src={usericon} alt="user-icon" />

        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage