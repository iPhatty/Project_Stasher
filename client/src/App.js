import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import apiFetch from './utils/api_fetch';

import SearchBar from './components/search_bar';
import StashList from './components/stash_list';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const Header = styled.h1`
  color: rgb(2, 112, 230);
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stashPoints: [],
      query: {
        city: undefined,
        sort: undefined
      },
      error: {}
    };
  }

  citySearch = searchValue => {
    // Use search value to make an API call using city query
    this.setState({ query: { city: searchValue } }, () => {
      this.apiCall(this.state.query);
    });
  };

  apiCall = queryObject => {
    const apiUrl = `https://api-staging.stasher.com/v1/stashpoints?`;
    const query = queryString.stringify(this.state.query);
    const fetchUrl = `${apiUrl}${query}`;
    console.log(this.state);

    apiFetch(fetchUrl)
      .then(data => {
        // data is an array of stashpoints received from API
        if (data.length > 0) {
          this.setState({ stashPoints: data, error: {} });
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
    // switch which takes selected option from dropdown list to create Api search query
    this.setState(
      ({ query }) => {
        return {
          query: {
            ...query,
            sort: selectedValue
          }
        };
      },
      () => {
        this.apiCall(this.state.query);
      }
    );
  };

  listFilter = selectedValue => {
    // switch which takes selected option from filters list to create Api search query
    this.setState(
      ({ query }) => {
        return {
          query: {
            ...query,
            ...selectedValue
          }
        };
      },
      () => {
        this.apiCall(this.state.query);
      }
    );
  };

  render() {
    return (
      <AppContainer>
        <Header>Project Stasher</Header>
        <SearchBar onSearchSubmit={this.citySearch} />
        <StashList
          stashPoints={this.state.stashPoints}
          listSort={this.listSort}
          listFilter={this.listFilter}
          error={this.state.error}
        />
        {this.state.error.fetch && <p>this.state.error.fetch</p>}
      </AppContainer>
    );
  }
}

export default App;
