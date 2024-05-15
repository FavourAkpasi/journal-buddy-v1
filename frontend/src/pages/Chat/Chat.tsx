import {
  FaArrowAltCircleUp,
  FaRobot,
  FaSpinner,
  FaUserCircle,
} from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidenav";
import { HomeContainer } from "../Home/style";
import { ChatContainer, ChatInput, ChatMessages } from "./style";
import { useParams } from "react-router-dom";
import useEntry from "../../Store/useEntry";
import useMessage from "../../Store/useMessage";
import { useEffect, useState } from "react";
import { AddMessageType } from "../../type/message";
import useAuth from "../../Store/useAuth";

const Chat = () => {
  const { entries } = useEntry((state) => state);
  const { fetchingMessages, messagesFetched, getAllMessages, messages, addMessage, setMessages, addingMessage, messageAdded, resetMessageState} =
    useMessage((state) => state);
  
  const { user } = useAuth((state) => state);

  const [newEntry, setNewEntry] = useState("");

  const param = useParams();
  const entryId = param.entryId as string;
  const entry = entries.find((entry) => entry._id === entryId);
  // console.log(messages);

  const handleSend = async () => {
    if (messages.length === 0 && !fetchingMessages) {
      const payload: AddMessageType = {
        content: entry?.text as string,
        role: "user",
        entryId: entryId,
      };
      setMessages([payload]);
      addMessage(payload);
      return;
    }
    if (messages.length !== 0) {
      const payload: AddMessageType = {
        content: newEntry,
        role: "user",
        entryId: entryId,
      };
      addMessage(payload);
      setNewEntry("");

    }
  }

  useEffect(() => {
   if (messageAdded) {
     getAllMessages(entryId);
      resetMessageState();
   }
  }, [ messageAdded, resetMessageState]);

  useEffect(() => {
      getAllMessages(entryId);
   }, [ ]);
 

  return (
    <>
      <Sidebar />
      <HomeContainer>
        <h2>Chat</h2>
        {messages.length === 0 && !fetchingMessages && (
          <p className="notice">
            you do not have a conversation about this entry yet. you can start
            one with your journal buddy now
          </p>
        )}
        <ChatContainer>
          {messages.map((message, index) => (
            <ChatMessages key={index}>
              {message.role === "user" ? <FaUserCircle /> : <FaRobot />}
              <span>{message.role === "user" ? `${user?.name} :`: "Journal Buddy :"}</span>
              <p>{message.content}</p>
            </ChatMessages>
          ))}
        </ChatContainer>
        <ChatInput>
          <textarea
            placeholder="Type a message"
            value={(messages.length == 0 && messagesFetched) ? entry?.text : newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          ></textarea>
          {addingMessage ? <FaSpinner className="spinner" /> : <FaArrowAltCircleUp onClick={handleSend} />}
        </ChatInput>
      </HomeContainer>
    </>
  );
};

export default Chat;
