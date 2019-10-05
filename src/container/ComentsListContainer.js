import {connect} from 'react-redux';
import CommentsList from '../component/CommentsList/CommentsList';

const mapStateToProps = state => ({  
  comments: state.commentsReducer.comments
});

export default connect(mapStateToProps)(CommentsList);