import { FaArrowAltCircleUp, FaRobot, FaUserCircle } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidenav";
import { HomeContainer } from "../Home/style";
import { ChatContainer, ChatInput, ChatMessages } from "./style";

const Chat = () => {

    // create an array of messages between the user and the bot

    const messages = [
        { user: "user", message: "Hello" },
        { user: "bot", message: "Hi there" },
        { user: "user", message: "How are you?" },
        { user: "bot", message: "I'm fine, thank you" },
        { user: "user", message: "What's your name?" },
        { user: "bot", message: "I'm a bot" },
        { user: "user", message: "Hello" },
        { user: "bot", message: "Hi there" },
        { user: "user", message: "How are you?" },
        { user: "bot", message: "I'm fine, thank you" },
        { user: "user", message: "What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?What's your name?" },
        { user: "bot", message: "I'm a bot" },
    ];


  return (
    <>
      <Sidebar />
      <HomeContainer>
        <ChatContainer className="chat-container">
            {messages.map((message, index) => (
                <ChatMessages key={index}>
                    {message.user === "user" ? <FaUserCircle /> : <FaRobot />}
                    <p>{message.message}</p>
                </ChatMessages>
            ))}
        </ChatContainer>
        <ChatInput>
          <textarea placeholder="Type a message"></textarea>
          <FaArrowAltCircleUp />
        </ChatInput>
      </HomeContainer>
    </>
  );
};

export default Chat;
