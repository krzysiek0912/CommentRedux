import React from 'react';
import "./AddComment.css";

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
    <div className="addCommentWrapper">
      <form onSubmit={this.handleSubmit}>          
              <input 
                value={this.state.value} 
                onChange={this.handleChange} 
                type="text" 
                name="newComment"
                className="form-control"/>
              <button type="submit" 
                onClick={this.handleSubmit} 
                className="btn btn-primary btn-block"
              >Dodaj komentarz</button>          
      </form>
    </div>
  );
}
export default AddComment;