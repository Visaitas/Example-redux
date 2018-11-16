import React, { Component } from 'react';
import CommentForm from './components/CommentForm'
import ShowComment from './components/ShowComment'



class App extends Component {
  render() {
    return (
      <div className="App">
          <CommentForm />
          <ShowComment />
      </div>
    );
  }
}

export default App;
