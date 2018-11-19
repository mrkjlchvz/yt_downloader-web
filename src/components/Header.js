import React from 'react'

const Header = (props) => {
  return (
    <div className='text-center border-b-4 border-black py-2 mb-8'>
      <span className='text-5xl special-font text-red-dark'> YT Downloader </span>
      <span> by </span>
      <a href='https://twitter.com/markisundefined' className='text-black font-bold no-underline'>@markisundefined</a> 
    </div>
  )
}

export default Header
