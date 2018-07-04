import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 12rem;
`;

const Button = styled.button``;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  searchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <SearchContainer>
        <StyledForm onSubmit={this.searchSubmit}>
          <StyledInput
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          <Button>Submit</Button>
        </StyledForm>
      </SearchContainer>
    );
  }
}
