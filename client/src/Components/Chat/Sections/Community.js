import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Community extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>I am Community</h5>
      </React.Fragment>
    );
  }
}

export default withRouter(Community);
