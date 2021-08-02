import React from "react";

function Popup(data) {
  console.log(data);
  return (
    <div className="popup-container">
      <div className="popup-detail">
        {<img src={data.data.image}></img>}
        {<span>{data.data.name}</span>}
        {<span>{data.data.gender}</span>}
        {<span>{data.data.status}</span>}
        <button onClick={data.onCloseClick}> Kapat </button>
      </div>
    </div>
  );
}

export default Popup;
