import React from 'react'

/**
 * aramada stata durumu değişeceği için class component
 */
class SearchBar extends React.Component {
  
  handleFormSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.props.searchMovieProp}          
        />
      </form>
    );
  }
}
export default SearchBar


