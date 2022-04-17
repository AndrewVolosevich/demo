import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  state = {
    filters: [
      {title: 'All', value: 'all'},
      {title: 'Done', value: 'done'},
      {title: 'Important', value: 'important'},
    ]
  }

  render() {

    const btns = this.state.filters.map((filter) => {
      const isActive = filter.value === this.props.filter

      return (
        <button
          type="button"
          className={isActive ? 'isActive' : ''}
          key={ filter.value }
          onClick={ () => this.props.handleFilterChange(filter.value) }
        >
          { filter.title }
        </button>
      )
    })

    return (
      <div>
        {btns}
      </div>
    );
  }
};

export default Filter;