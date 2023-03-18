import React from "react";
import ReactPlayer from "react-player";
// import './App.css';

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};
// check this demo https://cookpete.com/react-player/
const MyVideo = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      playing={true}
      volume={0.5}
    />
  );
};

export default App;
