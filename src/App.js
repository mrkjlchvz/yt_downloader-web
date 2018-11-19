import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '', videos: [] }
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

    YTSearch(opts, (videos) => {
      this.setState({ videos })
      console.log(videos)
    })
  }

  render() {
    return (
      <div className='container'>
        <input type='text' placeholder='e.g. cat videos' className='border border-2 border-black p-2' onChange={this.onInputChange} />
        <button className='bg-blue text-white p-2' onClick={this.searchVideos}>Search</button>

        <div className='videos'>
          <span> hello </span>
        </div>
      </div>
    );
  }
}

export default App;
