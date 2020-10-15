import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input type='submit' name='search' className='btn btn-dark btn-block' />
      </form>
    );
  }
}

export default Search;
