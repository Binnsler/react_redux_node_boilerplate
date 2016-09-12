import React from 'react';
import {connect} from 'react-redux';

import ButtonCounter from './ButtonCounter';

class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>This is the Home page.</h1>
        <ButtonCounter count={this.props.count} onClick={this.countClick.bind(this)}/>
      </div>
    );
  }

  countClick(){
    console.log('clicking on count')
  }
};

function mapStateToProps(state){
  return {count: state.test.count}
}

export default connect(mapStateToProps)(Home)
