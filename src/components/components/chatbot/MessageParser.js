class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }
    parse = message => {
        let msg = message.toLowerCase();
        if (msg.includes("hello")) {
            return this.actionProvider.greet();
        }
    };
}

export default MessageParser;