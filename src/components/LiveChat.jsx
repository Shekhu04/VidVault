import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import { generateRandomName, generateRandomText } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.message);

    useEffect(() => {
        const i = setInterval(() => {
          console.log("API Polling");

          dispatch(
            addMessage({
                name:generateRandomName(),
                message: generateRandomText(24),
            })
          );
        },500);

        return () => clearInterval(i);

    }, []);

  return (
    <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slat-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       {
        chatMessage.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))
       }
    </div>
  )
}

export default LiveChat