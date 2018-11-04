import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
  }

  // static defaultProps = {
  //     comments: []
  // }
  render() {
    const { isOpen, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem} className="comment-btn">
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1500}
        >
          {isOpen ? this.getBody() : null}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments } = this.props
    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )
    return <div className="comment-block">{body}</div>
  }
}

export default toggleOpen(CommentList)
