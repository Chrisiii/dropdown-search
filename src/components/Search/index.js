import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      mockData: [
        { title: "Mercury", id: uuidv4() },
        { title: "Venus", id: uuidv4() },
        { title: "Earth", id: uuidv4() },
        { title: "Mars", id: uuidv4() },
        { title: "Jupiter", id: uuidv4() },
        { title: "Saturn", id: uuidv4() },
        { title: "Uranus", id: uuidv4() },
        { title: "Neptune", id: uuidv4() },
      ],
    };
    this.mockData = this.state.mockData
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (prevState.inputValue !== this.state.inputValue) {
      if (this.state.inputValue.length > 3) {
        this.setState({
          mockData: this.mockData.filter((item) =>
            item.title.toLowerCase().includes(this.state.inputValue)
          ),
        });
      } else {
        this.setState({mockData: this.mockData})
      }
    }
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    console.log(this.mockData, "user");
    return (
      <>
        <input
          value={this.state.inputValue}
          type="text"
          placeholder="search planets"
          onChange={this.handleInputChange}
        />
        <div>
          {this.state.mockData.map((item) => (
            <div key={uuidv4()}>{item.title}</div>
          ))}
        </div>
      </>
    );
  }
}
