import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  libraryStatus,
  audioRef,
  setCurrentSong,
  songs,
  isPlaying,
  setSongs,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
