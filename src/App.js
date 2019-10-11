import React from 'react';
import './App.css';

// Redux Setup
import { Provider } from 'react-redux'
import store from './store/store'

import Posts from './components/Posts'
import PostForm from './components/PostForm'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React Post App</h1>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
