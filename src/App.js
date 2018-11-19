import React, { Component } from 'react';
import Header from './components/Header';
import YTSearch from 'youtube-api-search';

const VIDEOS = [
  {
    "kind": "youtube#searchResult",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/10YFj6WhISt8Iu3xFn4BMOL3DKU\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "D4iOpuTK-pg"
    },
    "snippet": {
      "publishedAt": "2018-11-11T03:38:14.000Z",
      "channelId": "UCxrVzY9dkWKHeKh4eE1jm5Q",
      "title": "Luffy Return To Fight Katakuri Again - One Piece 861",
      "description": "Scene is From One Piece Ep 861 One Piece by Eiichiro Oda and Toei Animation Disclaimer : All Rights Goes To Toei Animation One Piece Episode 861 HD ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/D4iOpuTK-pg/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/D4iOpuTK-pg/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/D4iOpuTK-pg/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "MarcoThePhoenix",
      "liveBroadcastContent": "none"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Kom1l261U6u9GNLEd2Vo_Lg-8kw\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "UEEwnPIaDYQ"
    },
    "snippet": {
      "publishedAt": "2018-11-19T00:06:05.000Z",
      "channelId": "UCrG6YragdKT-NSNCWQr9nJg",
      "title": "The Strawhats are the WORST PIRATES of Grand Line except Luffy – One Piece 925+",
      "description": "In One Piece 925, we might see Luffy and Kid talking to each other. We might even see Zoro, Sanji, or Nami. Are the Strawhats the Worst Pirates of One Piece ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/UEEwnPIaDYQ/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/UEEwnPIaDYQ/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/UEEwnPIaDYQ/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Gear 5",
      "liveBroadcastContent": "none"
    }
  },
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '', videos: VIDEOS }
    this.onInputChange = this.onInputChange.bind(this)
    this.searchVideos = this.searchVideos.bind(this)
  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  searchVideos(e) {
    let opts = {
      key: process.env.REACT_APP_YT_API_KEY, 
      term: this.state.term,
    }

    this.setState({ videos: VIDEOS })

    // YTSearch(opts, (videos) => {
    //   this.setState({ videos })
    //   console.log(videos)
    // })
  }

  render() {
    const videoItems = this.state.videos.map(video => {
      const thumbnail = video.snippet.thumbnails.medium

      return (
        <div> 
          <h3> {video.snippet.title} </h3>
          <div>
            <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} />
          </div>
          <a href="#" className='no-underline bg-red-dark text-white p-2'> Download </a>
        </div>
      )
    })

    return (
      <div className='container-md mx-auto py-4'>

        <Header />

        <input type='text' placeholder='e.g. cat videos' className='border border-2 border-black p-2' onChange={this.onInputChange} />
        <button className='bg-blue text-white p-2' onClick={this.searchVideos}>Search</button>

        <div className='videos'>
          {videoItems}
        </div>
      </div>
    );
  }
}

export default App;
