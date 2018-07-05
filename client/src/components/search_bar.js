import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Form = styled.form``;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 12rem;
  border-radius: 0.5rem;
  border-style: none;
  border: 1px solid #2f3640;
`;

const Button = styled.button`
  font-size: 1rem;
  color: #fefefe;
  border-radius: 0.5rem;
  border-style: none;
  background-color: rgb(2, 112, 230);
  height: 100%;
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
  };

  searchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <SearchContainer>
        <Form onSubmit={this.searchSubmit}>
          <Input
            value={this.state.inputValue}
            onChange={this.onInputChange}
            placeholder="Enter a city"
          />
          <Button>Submit</Button>
        </Form>
      </SearchContainer>
    );
  }
}
