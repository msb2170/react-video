import {useState} from 'react'
import './App.css';
import Menu from './Menu';
import Video from './Video';

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos)



function App() {
  const [videoSource, setVideoSource] = useState(videos.cat)

  function handleSelectVideo(video) {
    setVideoSource(videos[video])
    console.log(videoSource)
  }

  return (
    <div className="App">
      <Menu 
        handleSelectVideo={handleSelectVideo}
        videoNames={videoNames}
      />
      <Video videoSource={videoSource}/>
    </div>
  );
}

export default App;
