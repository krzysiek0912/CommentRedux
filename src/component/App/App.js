import React from 'react';
import './App.css';
import CommentsListContainer from '../../container/CommentsListContainer';
import AddCommentContainer from '../../container/AddCommentContainer';

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer/>
      <CommentsListContainer />
    </div>
  );
};

export default App;