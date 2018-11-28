import React from 'react'
import LoadingContainer from './LoadingContainer'

// <a 
//   href={downloadUrl} 
//   target='_blank' 
//   rel='noopener noreferrer' 
//   className='rounded text-lg no-underline bg-red-dark text-white p-2 hover:bg-red-darker'> 
//   Download on Yout 
// </a>

const VideoList = ({ videos, loadingVideos }) => {
  const videoItems = videos.map(video => {
    let thumbnail = video.snippet.thumbnails.medium
    let downloadUrl = `https://yout.com/video/${video.id.videoId}/`

    return (
      <div key={video.id.videoId} className='mb-4'> 
        <div className='flex'>
          <div className='w-1/3 mr-2'>
            <a href={downloadUrl} target='_blank' rel='noopener noreferrer'>
              <img class='border border-grey-darker' src={thumbnail.url} alt={thumbnail.url} />
            </a>
          </div>

          <div className='w-2/3'>
            <p className='mb-2'> {video.snippet.title} </p>
            <span className='text-grey-darker text-sm'> {video.snippet.channelTitle} </span>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='w-3/4 mx-auto'>
      {loadingVideos ? <LoadingContainer /> : videoItems}
    </div>
  )
}

export default VideoList

