import {connect} from 'react-redux';
import AddComment from '../component/AddComment/AddComment';
import {addComment} from '../actions/comentsActions'

const mapDispatchToProps = dispatch => ({
  addComment: (id) => dispatch(addComment(id)),
});

export default connect(null, mapDispatchToProps)(AddComment);