import React from "react";

class TwitterMessage extends React.Component {


    state = {
      message: ''
    };
  
    messageHandler = (e) => {
      this.setState({ message: e.target.value})
    } 

  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.messageHandler} value={this.state.message} />
        <p>{chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
