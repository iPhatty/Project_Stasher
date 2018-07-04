import React, { Component } from 'react';

import apiFetch from './utils/api_fetch';

import SearchBar from './components/search_bar';
import StashList from './components/stash_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stashPoints: [],
      selectedPoint: null
    };
  }

  citySearch = searchValue => {
    // Use search value to make an API call using city query
    const fetchUrl = `https://api-staging.stasher.com/v1/stashpoints?city=${searchValue}`;

    apiFetch(fetchUrl).then(data => {
      // data is an array of stashpoints received from API
      this.setState({ stashPoints: data, selectedPoint: searchValue });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.citySearch} />
        <StashList stashPoints={this.state.stashPoints} />
      </div>
    );
  }
}

export default App;
