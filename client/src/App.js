import React, { Component } from 'react';

import apiFetch from './utils/api_fetch';

import SearchBar from './components/search_bar';
import StashList from './components/stash_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stashPoints: [],
      city: null,
      error: {
        fetch: null,
        city: null
      }
    };
  }

  citySearch = searchValue => {
    // Use search value to make an API call using city query
    const fetchUrl = `https://api-staging.stasher.com/v1/stashpoints?city=${searchValue}`;

    apiFetch(fetchUrl)
      .then(data => {
        // data is an array of stashpoints received from API
        if (data.length > 0) {
          this.setState({ stashPoints: data, city: searchValue });
        } else {
          this.setState({
            error: { city: 'Your search returned no results' }
          });
        }
      })
      .catch(() => {
        this.setState({
          error: { fetch: 'Something went wrong, please try again later' }
        });
      });
  };

  listSort = selectedValue => {
    // switch which takes selected option from dropdown list the create Api search query
    const { city } = this.state;
    const fetchUrl = `https://api-staging.stasher.com/v1/stashpoints?city=${city}`;
    if (selectedValue === 'default') {
      apiFetch(fetchUrl).then(data => {
        this.setState({ stashPoints: data });
      });
    } else {
      apiFetch(`${fetchUrl}&sort=${selectedValue}`).then(data => {
        this.setState({ stashPoints: data });
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.citySearch} />
        <StashList
          stashPoints={this.state.stashPoints}
          sortList={this.listSort}
          error={this.state.error}
        />
        {this.state.error.fetch && <p>this.state.error.fetch</p>}
      </div>
    );
  }
}

export default App;
