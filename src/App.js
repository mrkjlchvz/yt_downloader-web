import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '', videos: [] }
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
