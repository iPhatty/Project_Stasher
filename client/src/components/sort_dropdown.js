import React, { Component } from 'react';

export default class SortList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionValue: null
    };
  }

  render() {
    return (
      <div>
        <label>
          Sort By:
          <select
            onChange={event => console.log(event.target.value)}
            value={this.state.optionValue ? this.state.optionValue : 'default'}
          >
            <option value="default">Default</option>
            <option value="capacity desc">Capacity Descending</option>
            <option value="capacity asc">Capacity Ascending</option>
          </select>
        </label>
      </div>
    );
  }
}
