import React from 'react'

const SearchForm = ({ onSubmit, onInputChange }) => {
  return (
    <form className='text-center mb-8' onSubmit={onSubmit}>
      <input type='text' placeholder='Search' className='appearance-none w-3/4 border-2 border-grey-dark rounded py-3 px-3 text-lg text-black font-bold leading-tight focus:outline-none focus:shadow-outline' onChange={onInputChange} />
    </form>
  )
}

export default SearchForm
