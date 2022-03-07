import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      displayText: "",
      secondDisplayText: "This is my second display value!"
    };
  }
  clickHandler = (event) => {
    console.log(event); // this is the react Synthetic Event
  };
  singleClickHandler = () => alert("Single Click!");
  doubleClickHandler = () => alert("Double Clicked!");
  mouseEnterHandler = () => alert("Mouse Enetered");
  changeHandler = (e) => {
    this.setState({ displayText: e.target.value });
  };
  // changeHandlerTwo = () => {
  //   this.setState({secondDisplayText: displayText.target.value});
  // }

  render() {
    console.log(this.state);
    return (
      <>
        <div className="firstButtons">
          <button onClick={this.clickHandler}>Click Me</button>
          <button onClick={this.singleClickHandler}>Click Handler Demo</button>
        </div>
        <div className="App">
          <h1>Hello Handlers</h1>
          <h2>Lets build out some handler functions.</h2>
          <button onClick={this.singleClickHandler}>Click Handler Demo</button>
          <button onDoubleClick={this.doubleClickHandler}>
            Double Click Handler
          </button>
          <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
          <input
            onChange={this.changeHandler}
            placeholder="Create a heading below!"
          />
          <h1>{this.state.displayText}</h1>
          <h2>{this.state.secondDisplayText}</h2>
          <button onClick={this.changeHandler}>{this.displayText}</button>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Button />, rootElement);
