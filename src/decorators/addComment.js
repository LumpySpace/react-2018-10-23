// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isOpenCommentTextArea: false
    }
    toggleCommentBlock = () =>
      this.setState({
        isOpenCommentTextArea: !this.state.isOpenCommentTextArea
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleCommentBlock={this.toggleCommentBlock}
        />
      )
    }
  }
