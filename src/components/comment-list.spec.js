import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecoratedCommentList, { CommentList } from './comment-list'
import comments from '../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Comment List', () => {
  it('should render comments', function() {
    const wrapper = shallow(<CommentList comments={comments} />)
    expect(wrapper.find('.comment-item').length).toEqual(comments.length)
  })

  /*it('should render all comments closed', function() {
    const wrapper = render(<CommentList comments={comments} />);
    expect(wrapper.find('.comment-block').length).toEqual(0)
  });

  it('should open comments on click', function() {
    const wrapper = mount(<DecoratedCommentList comments={comments} />);
    wrapper
      .find('.comment-btn')
      .at(0)
      .simulate('click');

    expect(wrapper.find('.comment-block').length).toEqual(1)
  });

  it('should call fetch data', function(done) {
    mount(
      <DecoratedCommentList
        comments={comments}
        fetchData={() => {
          done()
        }}
      />
    )
  })*/
})
