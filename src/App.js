import React, { Component } from "react";
import MainLayout from "./layouts/main/MainLayout.js";
import ListPostPage from "./pages/listPost/index.js";
import CreatePostPage from "./pages/createPost/index.js";

import _ from "lodash";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { allPost: allPost };
  }

  addPost = (title, content) => {
    let newPost = {
      id: generateID(),
      title,
      content
    };
    let allPost = [...this.state.allPost];
    allPost.push(newPost);
    this.setState({ allPost: allPost });
  };

  removePost = postID => {
    let allPost = [...this.state.allPost];
    _.remove(allPost, post => post.id === postID);
    this.setState({ allPost: allPost });
  };

  render() {
    return (
      <div className="App">
        <MainLayout>
          <ListPostPage
            allPost={this.state.allPost}
            removePost={this.removePost}
          />
          <CreatePostPage addPost={this.addPost} />
        </MainLayout>
      </div>
    );
  }
}

export default App;
