import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import svg from './images/undraw_music.svg';

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

    let opts = {
      key: process.env.REACT_APP_YT_API_KEY, 
      term: searchTerm,
    }

    this.setState({ loading: true })

    YTSearch(opts, (result) => {
      console.log(result)
      let videos = result.filter(obj => 
        obj.id.kind === 'youtube#video'
      )
      this.setState({ videos, loading: false, })
    })
  }

  render() {
    let emptyRecords = (
      <div className='text-center'>
        <img src={svg} className='w-1/2' />
        <p className='text-xl font-bold text-grey-dark special-font mt-4'>
          Find the videos you want to download!
        </p>
      </div>
    )

    return (
      <div className='container-md mx-auto py-4'>
        <Header />
        <SearchForm onSubmit={this.searchVideos} onInputChange={this.setSearchTerm} />

        { this.state.videos.length 
            ? <VideoList videos={this.state.videos} loadingVideos={this.state.loading} />
            : emptyRecords
        }
      </div>
    )
  }
}

export default App;
