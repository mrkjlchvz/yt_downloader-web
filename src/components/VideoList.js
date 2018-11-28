import React from 'react'
import LoadingContainer from './LoadingContainer'

const VideoList = ({ videos, loadingVideos }) => {
  const videoItems = videos.map(video => {
    let thumbnail = video.snippet.thumbnails.high
    let downloadUrl = `https://yout.com/video/${video.id.videoId}/`

    return (
      <div key={video.id.videoId} className='mb-4'> 
        <div className='flex'>
          <div className='w-1/3 mr-2'>
            <a href={downloadUrl} target='_blank' rel='noopener noreferrer'>
              <img className='border border-grey-darker' src={thumbnail.url} alt={thumbnail.url} />
            </a>
          </div>

          <div className='w-2/3'>
            <p className='mb-2 text-lg'> {video.snippet.title} </p>

            <div className='mb-4'>
              <span className='text-grey-darker text-sm'> {video.snippet.channelTitle} </span>
            </div>

            <div>
              <a 
                href={downloadUrl} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='rounded no-underline bg-red-dark text-white p-2 hover:bg-red-darker'> 
                Download on Yout 
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      {loadingVideos ? <LoadingContainer /> : videoItems}
    </div>
  )
}

export default VideoList

