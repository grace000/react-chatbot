import React, { Component } from 'react';
import Pusher from 'pusher-js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [],
    };
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    const pusher = new Pusher('0ec3901b3bf8a868f645', {
      cluster: 'us2',
      encrypted: true,
    });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
      const msg = {
        text: data.message,
        user: 'ai',
      };
      this.setState({
        conversation: [...this.state.conversation, msg],
      });
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleChange = event => {
    this.setState({ userMessage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.userMessage.trim()) return;

    const msg = {
      text: this.state.userMessage,
      user: 'human',
    };

    this.setState({
      conversation: [...this.state.conversation, msg],
    });

    const chatURL = 'https://tiffs-chatbot.herokuapp.com/chat';

    fetch(chatURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: this.state.userMessage,
      }),
      
    });
    this.setState({ userMessage: '' });
  };

  render() {
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content">{text}</span>
        </div>
      );
    };

    const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div>
        <h1 className="chat-header">My Virtual Self</h1>
        <h3 className="chat-subheader">A React Chatbot</h3>
        <div className="chat-window">
          <div className="conversation-view">{chat}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
          </div>
          </div>
          
          <div className="message-box">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.userMessage}
                onInput={this.handleChange}
                className="text-input"
                type="text"
                autoFocus
                placeholder="Type your message and hit Enter to send"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;