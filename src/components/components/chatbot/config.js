import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Essay Help Chat",
    initialMessages: [
        createChatBotMessage(`Hello, this is Cornell. How may I help you?`),
    ],
};

export default config;