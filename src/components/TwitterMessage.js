import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event=>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMessage(event)} type="text" name="message" id="message" value={this.state.message}/>
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
