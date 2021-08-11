import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tmse hi", duration: "4:10" },
    { title: "Love me Like you do", duration: "5:00" },
    { title: "Guess who is back", duration: "3:45" },
    { title: "Best day of my life", duration: "6:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
