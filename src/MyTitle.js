import React, { Component } from 'react';

class MyTitle extends Component {

    constructor() {
      super();
      this.handleColor = this.handleColor.bind(this);

      this.state = {
        color: 'red'
      }
    }

    handleColor(e) {
      this.setState({
        color: e.target.value
      })
    }

    render() {

        const style = { color: this.state.color }

        return (
         <div>
          <h1 style={ style }>{this.props.tagline}</h1>

          <span>Select a color for the title</span> <br/>
          <select name="colors" onChange={this.handleColor}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
         </div>
        );
    }
}

export default MyTitle;
