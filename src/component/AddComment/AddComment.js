import React from 'react';

class AddComment extends React.Component {
  state={
    value:''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.value);
    this.setState({value: ""});
  }

  render = () =>(
    <div>
      <form onSubmit={this.handleSubmit} action="">
      <input 
        value={this.state.value} 
        onChange={this.handleChange} 
        type="text" 
        name="newComment"/>
      </form>
      <button onClick={this.handleSubmit}>Dodaj komentarz</button>
    </div>
  );
}
export default AddComment;