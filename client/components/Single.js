import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';
// import comments
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className='single-photo'>
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  },
});

export default Single;
