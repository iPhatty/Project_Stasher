import React, { Component } from 'react';

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

    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          // Check status code
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          // Return nothing
          return;
        } else {
          // Return response.json()
          return response.json();
        }
      })
      .then(data => {
        // data is an array of stashpoints received from API
        this.setState({ stashPoints: data });
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
