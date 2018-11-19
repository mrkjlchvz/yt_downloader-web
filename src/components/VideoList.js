import React from 'react'

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video => {
    let thumbnail = video.snippet.thumbnails.high
    let downloadUrl = `https://yout.com/video/${video.id.videoId}/`

    return (
      <div key={video.id.videoId} className='mb-4'> 
        <p className='font-bold text-lg py-2'> 
          {video.snippet.title} 
        </p>

        <div className='my-2'>
          <a href={downloadUrl} target='_blank' className='no-underline bg-red-dark text-white p-2'> Download on Yout </a>
        </div>

        <div className='py-4'>
          <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} />
        </div>
      </div>
    )
  })

  return (
    <div className='w-3/4 mx-auto'>
      {videoItems}
    </div>
  )
}

export default VideoList

