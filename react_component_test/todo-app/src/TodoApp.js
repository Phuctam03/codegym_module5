import { Component } from "react";
import "./TodoApp.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };
  handleAddItem = () => {
    if (this.state.item !== "") {
      this.setState({
        list: [...this.state.list, this.state.item],
        item: "",
      });
    }
  };

  render() {
    if (this.state.list.length !== 0) {
      return (
        <div className="main2">
          <thead>
            <h1>Todo List</h1>
            <input
              type="text"
              id="item"
              value={this.state.item}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleAddItem}>ADD</button>
          </thead>
          <tbody>
            <ul>
              {this.state.list.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </tbody>
        </div>
      );
    }
    return (
      <div className="main1">
        <h1>Todo List</h1>
        <input
          type="text"
          id="item"
          value={this.state.item}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleAddItem}>ADD</button>
      </div>
    );
  }
}
export default Todo;
