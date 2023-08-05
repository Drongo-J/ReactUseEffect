import { useEffect, useRef, useState } from 'react';
import './App.css';

function VideoPlayer({src, isPlaying}){
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying){
      ref.current.play();
    }
    else{
      ref.current.pause();
    }
  })

  return <video ref={ref} src={src}></video>
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <>
     <button onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? "Pause" : "Play"}
      </button> 
      <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></VideoPlayer>
    </>
  );
}

export default App;
