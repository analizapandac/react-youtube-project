import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAJScHe3pQUDqz207k2gYxQTSGcqgdBX9E';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            //this.setState({ videos: videos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // if key and value have same property names
        });
    }

    // passing props in React, videos is a prop here

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // the function can only be called once every 300 milliseconds

        return (
               <div>
                   <SearchBar onSearchTermChange={videoSearch}/>
                   <VideoDetail video={this.state.selectedVideo} />
                   <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
               </div>
           );
    }
}

// Create a new component and this component should produce some HTML
// const App = () => { // this is a class
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

// Take this component's generated HTML and put it on the page
// ReactDOM requires an instance of the component not the class itself
// so we need to create an instance of it using <App />
// wrap it in JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));
