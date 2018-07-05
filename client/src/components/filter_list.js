import React, { Component } from 'react';

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
      <div>
        <label>
          Filter By:
          <button onClick={this.clearFilter}>All</button>
          <button onClick={this.activeFilter}>Active</button>
          <button onClick={this.inactiveFilter}>In Active</button>
        </label>
      </div>
    );
  }
}
