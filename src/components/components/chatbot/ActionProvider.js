class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const msg = this.createChatBotMessage(`Hello, to you!`);
    this.addMessageToState(msg);
    console.log(msg.message);
  };

  addMessageToState = messages => {
    if (Array.isArray(messages)) {
      this.setState(prevState => ({
        ...prevState,
        messsages: [...prevState.messages, ...messages],
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        messsages: [...prevState.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
