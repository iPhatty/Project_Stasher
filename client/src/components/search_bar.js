import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 12rem;
`;

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <SearchContainer>
        <StyledInput
        value={this.state.inputValue}
        onChange={this.onInputChange} />
      </SearchContainer>
    );
  }
}
