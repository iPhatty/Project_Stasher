import React, { Component } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  font-size: 0.8rem;
  color: #fefefe;
  border-radius: 0.5rem;
  border-style: none;
  background-color: rgb(2, 112, 230);
  height: 100%;
  margin: 0 3px;
`;
export default class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: undefined
    };
  }

  // function to change active filter to undefined
  clearFilter = () => {
    this.setState({ active: undefined }, () =>
      this.props.filterList(this.state)
    );
  };
  // function to change active filter to true
  activeFilter = () => {
    this.setState({ active: true }, () => this.props.filterList(this.state));
  };
  // function to change active filter to false
  inactiveFilter = () => {
    this.setState({ active: false }, () => this.props.filterList(this.state));
  };

  render() {
    return (
      <FilterContainer>
        <label>
          Filter By:
          <Button onClick={this.clearFilter}>None</Button>
          <Button onClick={this.activeFilter}>Active</Button>
          <Button onClick={this.inactiveFilter}>Inactive</Button>
        </label>
      </FilterContainer>
    );
  }
}
