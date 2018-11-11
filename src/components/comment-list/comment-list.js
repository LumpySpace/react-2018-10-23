import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpenItem from '../../decorators/toggleOpen'
import toggleCommentBlock from '../../decorators/addComment'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    isOpenCommentTextArea: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpenItem, isOpenCommentTextBlock } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    const commentBtn = isOpenCommentTextBlock
      ? 'Close Comment Box'
      : 'Add Comment'
    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comment-list__btn">
          {text}
        </button>
        <button onClick={toggleCommentBlock}>{commentBtn}</button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
          {this.addComment()}
        </CSSTransition>
      </div>
    )
  }

  addComment() {
    const { isOpenCommentTextBlock } = this.props
    if (!isOpenCommentTextBlock) return null
    return (
      <form action="">
        <input type="text" placeholder="Your Name Here, Please" />
        <textarea name="" id="" cols="100" rows="4" />
        <button onClick={this.postComment}>Post Comment</button>
      </form>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null
    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
      </div>
    )
  }
  get comments() {
    return (
      <ul>
        {this.props.comments.map((commentId) => (
          <li key={commentId} className="test--comment-list__item">
            <Comment id={commentId} />
          </li>
        ))}
      </ul>
    )
  }
}
export default toggleOpenItem(CommentList)
