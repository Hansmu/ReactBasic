//Every file that we write is separated from other code that we write, so we have to use imports to get access to other files.
import _ from 'lodash';
import React, { Component } from 'react'; //Knows how to work with React components.
import ReactDOM from 'react-dom'; //To render the elements to the actual DOM.
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyDkidiQEgNxblRS5oJvfud5Xf3T9M2kaYA";

//React has downwards dataflow. It means that only the most parent component should be in charge of fetching the data.

//Create a new component. This component should produce some HTML.
class App extends Component { // const is ES6 syntax. A constant. => Fat arrow ES6 syntax to declare a function.
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kittens');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); //videos: videos can be condensed to that because the names are the same.
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300); //Returns a new function that can be called every 300 ms.

        return (
            <div>
                <SearchBar onSearchTermChange={ term => this.videoSearch(term) }/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> //Passing props to VideoList called videos. Arrives as an argument under props. Pass a callback function with onVideoSelect.
        );//Callbacks shouldn't go deeper than two levels.
    }; //JSX - lets us write HTML looking code that's really just Javascript. JSX needs to be translated, can't be understood normally by a browser.
    //Have parentheses when you have a multiline element.
    //Without JSX, the code would be a lot less readable and lengthier.
}

//Take this component's generated HTML and put it on the page(In the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Have to use <App /> to create an instance from the class App.
// Second argument is a target container, where to render it in the HTML.

//Run command: npm start