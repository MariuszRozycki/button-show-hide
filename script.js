class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton() {

    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }

  render() {
    console.log(this.state.messageIsActive);
    const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat pariatur ut possimus praesentium voluptatem est hic magnam qui, quam impedit dignissimos inventore vero atque! Doloremque iste magni distinctio nulla praesentium?"
    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Hide' : 'Show'}</button>
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    )

  }

}

ReactDOM.render(<Message />, document.getElementById('root'));