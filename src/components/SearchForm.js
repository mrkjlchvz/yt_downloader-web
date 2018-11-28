import React from 'react'

const SearchForm = ({ onSubmit, onInputChange, searchTerm }) => {
  return (
    <form className='mb-8' onSubmit={onSubmit}>
      <input type='text' value={searchTerm} placeholder='Search' className='appearance-none w-full border-2 border-grey-dark rounded py-3 px-3 text-lg text-black font-bold leading-tight focus:outline-none focus:shadow-outline' onChange={onInputChange} />

      <div className='mt-2'>
        <button type='submit' className='bg-green text-white special-font hover:bg-green-dark text-2xl px-4 py-3 rounded'> Find Videos </button>
      </div>
    </form>
  )
}

export default SearchForm
