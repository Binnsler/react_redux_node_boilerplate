import React from 'react';

class ButtonCounter extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.props.onClick}>+1 Me</button>
      </div>
    );
  }
}

export default ButtonCounter;
