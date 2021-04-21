import React, { Component } from 'react';
import News from './components/News';
import { connect } from 'react-redux';
class App extends Component {
  render() { 
    return (
      <div>
        App
        <News/>
        {this.props.dulieu}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.name
  }
}
export default connect(mapStateToProps)(App);