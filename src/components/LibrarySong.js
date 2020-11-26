import React from 'react';

const LibrarySong = ({
  isPlaying,
  audioRef,
  setCurrentSong,
  song,
  setSongs,
  songs,
  id,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // add active state
    const newSongs = songs.map((activeSong) => {
      if (activeSong.id === id) {
        return {
          ...activeSong,
          active: true,
        };
      }
      return {
        ...activeSong,
        active: false,
      };
    });
    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={songSelectHandler}
      onKeyDown={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
