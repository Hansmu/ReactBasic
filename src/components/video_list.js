import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //Passing in a function to .map is something that will run with every element of the array.
    const videoItems = props.videos.map((video) => {
       return <VideoListItem key={video.etag} video={video} /> //Has to have IDs for specific elements, so it wouldn't re-render all of the elements when one changes.
    });

    return (//className is used because React would have a lot of conflicts with class.
        //In a class the props are available everywhere with this.props. In a functional component you just pass it in and refer to it without this.
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    );
}

export default VideoList;