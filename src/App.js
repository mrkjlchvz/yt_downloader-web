import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const VIDEOS = [
  {
    "kind": "youtube#searchResult",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/PX_a6fYQGk1o9JCS61xMK6AEKSQ\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "Pk86yykcY34"
    },
    "snippet": {
      "publishedAt": "2018-11-18T02:59:19.000Z",
      "channelId": "UCxrVzY9dkWKHeKh4eE1jm5Q",
      "title": "Luffy Tries To Predict Katakuri Attacks - One Piece 862",
      "description": "Scene is From One Piece Ep 862 One Piece by Eiichiro Oda and Toei Animation Disclaimer : All Rights Goes To Toei Animation One Piece Episode 862 HD ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Pk86yykcY34/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Pk86yykcY34/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Pk86yykcY34/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "MarcoThePhoenix",
      "liveBroadcastContent": "none"
    }
  }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '', videos: VIDEOS }
    this.setSearchTerm = this.setSearchTerm.bind(this)
    this.searchVideos = this.searchVideos.bind(this)
  }

  setSearchTerm(e) {
    this.setState({ term: e.target.value })
  }

  searchVideos(e) {
    e.preventDefault()

    let opts = {
      key: process.env.REACT_APP_YT_API_KEY, 
      term: this.state.term,
    }

    YTSearch(opts, (videos) => {
      console.log(videos)
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div className='container-md mx-auto py-4'>
        <Header />
        <SearchForm onSubmit={this.searchVideos} onInputChange={this.setSearchTerm} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
