import { useState } from "react";
import "../css/searchbar.css";
import {HiOutlineEmojiHappy  } from 'react-icons/hi';
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
export default function Searchbar(props) {
  // initialze states
  const [click, setClick] = useState(false);
  // closeSearchbox
  const closeSearchbox = () => {
    setClick(false);
  };
  // showSearchBox
  const showSearchBox = () => {
    setClick(!click);
  };
  // initialize by props
  const searchLocation = props.searchLocation;
  const setLocation = props.setLocation;
  const location = props.location;

  return (
    <div className="search">
  
      {click ? (
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      ) : null}
      {click ? (
        <div className="buttonDiv">
        <AiOutlineCloseCircle
          size={38}
          className="searchBarButton"
          onClick={closeSearchbox}
        />
        </div>
      ) : (
        <div className="buttonDiv">
          <h1 style={{fontWeight:'500'}}>Search something..  <HiOutlineEmojiHappy className="wave" size={35}/></h1>
        <AiOutlineSearch
          size={35}
          className="searchBarButton wave"
          onClick={showSearchBox} 
        />
        </div>
      )}
    
    </div>
  );
}
