import React, { Component } from 'react';

import SearchBar from './components/search_bar';
import StashList from './components/stash_list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <StashList/>
      </div>
    );
  }
}

export default App;
