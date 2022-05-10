import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../../socket/socket';
export default function ChatForm() {
  //VARIABLES TO MAKE SOCKET WORK
  const socket = useContext(SocketContext);
  console.log(socket);
  const [chatBoxInput, setChatBoxInput] = useState('');

  const chatBoxOnChange = (e) => {
    setChatBoxInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(chatBoxInput);
    //sends message, second argument is use object, message is message to be sent
    // socket.emit('send-message', user, message);
    setChatBoxInput('');
  };
  //sending message
  // useEffect(() => {
  //   socket.on('send-message', 'sup', {name: 'josh'}, chatboxInput)
  // })

  return (
    <Form onSubmit={onFormSubmit}>
      <ChatInput
        type='text'
        placeholder='type to players'
        onChange={chatBoxOnChange}
        value={chatBoxInput}
      />
      <input hidden type='submit' />
    </Form>
  );
}

const Form = styled.form`
  margin-top: 1em;
`;

const ChatInput = styled.input`
  height: 35px;
  border-radius: 7px;
  width: 100%;
`;
