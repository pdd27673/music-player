import React, { useState } from 'react';
// Import styles
import './styles/app.scss';
// adding components
import Player from './components/Player';
import Song from './components/Song';
// Import Util
import data from './util';

function App() {
  // State
  const [songs] = useState(data());
  const [currentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
