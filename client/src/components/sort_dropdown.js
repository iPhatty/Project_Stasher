import React, { Component } from 'react';
import styled from 'styled-components';

const DropContainer = styled.div`
  padding-left: 1rem;
`;

export default class SortList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionValue: null
    };
  }

  // When an option from drop down list is selected, the sortList will use its value to add the sort query to the fetch
  onSortChange = event => {
    this.props.sortList(event.target.value);
    this.setState({ optionValue: event.target.value });
  };

  render() {
    return (
      <DropContainer>
        <label>
          Sort By:
          <select
            onChange={this.onSortChange}
            value={this.state.optionValue ? this.state.optionValue : 'Default'}
          >
            <option value="Default" disabled>
              Sort By
            </option>
            <option value="by_capacity:desc">Capacity Descending</option>
            <option value="by_capacity:asc">Capacity Ascending</option>
          </select>
        </label>
      </DropContainer>
    );
  }
}
