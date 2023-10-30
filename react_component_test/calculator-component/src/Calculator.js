import { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOne: "",
      valueTwo: "",
      result: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  plus = () => {
    this.setState({
      result: parseInt(this.state.valueOne) + parseInt(this.state.valueTwo),
    });
  };

  sub = () => {
    this.setState({
      result: parseInt(this.state.valueOne) - parseInt(this.state.valueTwo),
    });
  };

  Mul = () => {
    this.setState({
      result: parseInt(this.state.valueOne) * parseInt(this.state.valueTwo),
    });
  };

  Div = () => {
    this.setState({
      result: parseInt(this.state.valueOne) / parseInt(this.state.valueTwo),
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="firstValue"
          id="valueOne"
          onChange={this.handleChange}
          value={this.state.valueOne}
        ></input>
        <input
          type="text"
          placeholder="secondValue"
          id="valueTwo"
          onChange={this.handleChange}
          value={this.state.valueTwo}
        ></input>
        <p>Result: {this.state.result}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.Mul}>*</button>
        <button onClick={this.Div}>/</button>
      </div>
    );
  }
}

export default Calculator;
