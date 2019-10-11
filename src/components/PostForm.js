import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/postActions'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // Call action
    this.props.createPost(post)
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label><br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label><br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(PostForm)