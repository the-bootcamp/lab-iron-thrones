import React from "react";

class Search extends React.Component {
  state = {
    srchwrd: "",
  };

  handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    this.props.onHandleSearch(value);
    this.setState({ srchwrd: value });
  };
  render() {
    return (
      <>
        <div className='row mb-4 mt-3'>
          <div className='col-12'>
            <label>Search title: </label>
            <input
              type='text'
              name='srchwrd'
              placeholder='You win or you die'
              value={this.state.srchwrd}
              onChange={this.handleSearch}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
