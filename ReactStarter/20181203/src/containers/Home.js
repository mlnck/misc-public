import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import '../styles/app.css';

class Home extends React.Component{
  render()
  {
    return(
      <div>
        HomePage
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    // authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch)
{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
