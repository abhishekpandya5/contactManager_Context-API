import React, { Component } from "react";

class Test extends Component {
  state = {
    id: '',
    title: ''
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
          this.setState({
              id: data.id,
              title: data.title
          })
      });
  }

  render() {
    const {id, title} = this.state;
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
  } 
}

export default Test;
