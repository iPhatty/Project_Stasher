import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form``;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 12rem;
`;

const Button = styled.button`
  border-radius: 0.5rem;
  background-color: rgb(2, 112, 230);
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
          <Input value={this.state.inputValue} onChange={this.onInputChange} />
          <Button>Submit</Button>
        </Form>
      </SearchContainer>
    );
  }
}
