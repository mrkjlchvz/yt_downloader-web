import React from 'react'

const Header = (props) => {
  return (
    <div className='text-center py-2 mb-4'>
      <div className='border-b-4 border-black'>
        <span className='text-5xl special-font text-red-dark'> YT Downloader </span>
        <span> by </span>
        <a href='https://twitter.com/MarkFChavez' className='text-black font-bold no-underline'>@MarkFChavez</a> 
      </div>

      <p className='text-center mt-4'> 
        <span className='font-bold'> Note: </span> 
        Video downloading is only supported on Android devices. 
      </p>
    </div>
  )
}

export default Header
