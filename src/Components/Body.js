import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "./Popup";
import "../Css/BodyStyle.css";

function Body() {
  const [character, setCharacter] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  /* Selected index === STATE */
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacter(res.data.results));
  }, []);

  // const closePopupButton = () => {
  //   setSelectedIndex(-1);
  // };
  return (
    <div className="body_container_fluid">
      <div className="body_container">
        <div className="body_container_center">
          {character.map((char, index) => (
            <div className="charList" key={index}>
              {isPopupOpen && (
                <div>
                  {selectedIndex === index && (
                    <Popup
                      onCloseClick={() => setPopupOpen(false)}
                      data={char}
                    />
                  )}
                </div>
              )}

              <img
                onClick={() => {
                  setSelectedIndex(index);
                  setPopupOpen(true);
                }}
                className="charList_img"
                src={char.image}
              ></img>
              <span className="charList_items">
                {char.id} - {char.name}
              </span>
              <span className="charList_items"> Status: {char.status}</span>
              <span className="charList_items"> Gender: {char.gender}</span>
              <span className="charList_items"> Species: {char.species}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
