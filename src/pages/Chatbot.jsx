import React, { useState } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatbot = (input) => {
    let output = "";
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is Jarvis, I'm a chatbot.";
    } else if (input.includes("what is maati-16")) {
      output = "MAATI-16 is a youth-run community organization based in Patna, dedicated to helping the poor and needy, especially children who aspire to study and create a brighter future.";
    } else if (input.includes("what areas does maati-16 focus on")) {
      output = "Our focus areas include education, healthcare, technical professional training, and other economic activities aimed at assisting the economically and educationally disadvantaged.";
    } else if (input.includes("where is maati-16 currently operating")) {
      output = "Currently, we are operating in New Delhi, with plans to expand our reach throughout India.";
    } else if (input.includes("what was maati-16 previously known as")) {
      output = "We were previously known as 'YOUTH POWER', a name that portrayed the positive potential energy of the youth to bring about societal change.";
    } else if (input.includes("what does the name maati-16 signify")) {
      output = "The name 'MAATI' symbolizes 'Soil,' representing our grounding and commitment to serving humanity, while '16' refers to the year we were established.";
    } else if (input.includes("how can i get involved with maati-16")) {
      output = "You can get involved by volunteering, donating, or spreading awareness about our initiatives. Please visit our website for more information on how to contribute.";
    } else if (input.includes("what kind of support does maati-16 provide")) {
      output = "We provide relief, assistance, and support to the general public, especially focusing on the needs of economically and educationally disadvantaged individuals and families.";
    } else if (input.includes("how does maati-16 aim to create a brighter future for children")) {
      output = "We aim to create a brighter future for children by providing educational opportunities, healthcare support, and technical training to empower them with skills for a better life.";
    } else if (input.includes("can i donate to maati-16")) {
      output = "Yes, donations are always welcome! You can visit our website or contact us directly to find out how you can make a difference through your contributions.";
    } else if (input.includes("what impact has maati-16 made so far")) {
      output = "We have made significant impacts in the lives of many children and families by providing access to education, healthcare services, and vocational training programs, helping them to uplift their socio-economic status.";
    } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }

    return output;
  };

  const sendMessage = () => {
    if (input) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
        { text: chatbot(input), sender: 'bot' },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="container">
      <div className="title">Let's Chat</div>
      <div className="chat" id="chat">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="avatar" />
            <div className="text">{message.text}</div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message here...."
      />
      <button className="button" onClick={sendMessage}>
        <i className="fa-brands fa-telegram" />
      </button>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          background: #222831;
        }
        
        .container {
          width: 600px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: #64646f33 0px 7px 29px 0px;
          background: #31363F;
        }
        
        .title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: #edf1f3;
        }
        
        .chat {
          height: 400px;
          overflow-y: scroll;
          margin: 20px 0;
          padding: 10px;
          border: 2px solid #545250;
          border-radius: 5px;
          background: #222831;
        }
        
        .message {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        
        .user {
          justify-content: flex-end;
        }
        
        .bot {
          justify-content: flex-start;
        }
        
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 10px;
        }
        
        .user .avatar {
          order: 2;
          background: url("avatar.jpg");
          background-size: cover;
        }
        
        .bot .avatar {
          order: 1;
          background: url("bot.jpg");
          background-size: cover;
        }
        
        .text {
          max-width: 70%;
          padding: 10px;
          border-radius: 10px;
          font-size: 16px;
          color: white;
        }
        
        .user .text {
          background: #4a4d52;
        }
        
        .bot .text {
          background: #8c8c8e;
        }
        
        .input {
          width: 100%;
          padding: 10px;
          border: 2px solid #cbcbce;
          border-radius: 5px;
          outline: none;
          font-size: 20px;
        }
        
        .input:focus {
          border-color: #8296d0;
        }
        
        .button {
          position: absolute;
          width: 80px;
          border: none;
          padding: 1px;
          background: #31363F;
          color: white;
          font-size: 20px;
          cursor: pointer;
          margin-left: -4.1rem;
        }
        
        button i {
          font-size: 3rem;
        }
        
        .button:hover {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .chat::-webkit-scrollbar {
          width: 10px;
        }
        
        .chat::-webkit-scrollbar-thumb {
          background: #bcbdc0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
