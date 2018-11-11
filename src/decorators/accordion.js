// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      openItemId: null,
      openCommentForm: null
    }
    toggleOpenItem = (openItemId, openCommentForm) =>
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId,
        openCommentForm:
          openCommentForm === this.state.openCommentForm
            ? null
            : openCommentForm
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
          toggleCommentBlock={this.toggleCommentBlock}
        />
      )
    }
  }
