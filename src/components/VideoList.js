import React from 'react'
import LoadingContainer from './LoadingContainer'

const VideoList = ({ videos, loadingVideos }) => {
  const videoItems = videos.map(video => {
    let thumbnail = video.snippet.thumbnails.high
    let downloadUrl = `https://yout.com/video/${video.id.videoId}/`

    return (
      <div key={video.id.videoId} className='mb-4'> 
        <p className='font-bold text-lg py-2'> 
          {video.snippet.title} 
        </p>

        <div className='my-2'>
          <a href={downloadUrl} target='_blank' rel='noopener noreferrer' className='rounded text-lg no-underline bg-red-dark text-white p-2 hover:bg-red-darker'> Download on Yout </a>
        </div>

        <div className='py-4'>
          <img src={thumbnail.url} alt={thumbnail.url} width={thumbnail.width} height={thumbnail.height} />
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

