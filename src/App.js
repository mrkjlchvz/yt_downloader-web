// Components
import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import VideoList from './components/VideoList';

// Assets
import svg from './images/undraw_music.svg';

// Third-party libs
import axios from 'axios';

const YT_URL = 'https://www.googleapis.com/youtube/v3/search';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '', loading: false, videos: [] }
    this.setSearchTerm = this.setSearchTerm.bind(this)
    this.searchVideos = this.searchVideos.bind(this)
  }

  setSearchTerm(e) {
    this.setState({ term: e.target.value })
  }

  searchVideos(e) {
    e.preventDefault()

    let searchTerm = this.state.term

    if (searchTerm === '') { return alert('Fill in a search term'); }

    let params = {
      part: 'snippet',
      type: 'video',
      key: process.env.REACT_APP_YT_API_KEY, 
      q: searchTerm,
      maxResults: '15',
    }

    this.setState({ loading: true })

    axios.get(YT_URL, { params: params })
      .then(response => {
        let videos = response.data.items
        this.setState({ videos, loading: false, term: '' })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    let emptyRecords = (
      <div>
        <img alt='empty-record' src={svg} className='w-1/2' />
        <p className='text-xl font-bold text-grey-dark special-font mt-4'>
          Find the videos you want to download!
        </p>
      </div>
    )

    return (
      <div className='container-md mx-auto p-4'>
        <Header />

        <SearchForm 
          searchTerm={this.state.term}
          onSubmit={this.searchVideos} 
          onInputChange={this.setSearchTerm} />

        { this.state.videos.length 
            ? <VideoList videos={this.state.videos} loadingVideos={this.state.loading} />
            : emptyRecords
        }
      </div>
    )
  }
}

export default App;
