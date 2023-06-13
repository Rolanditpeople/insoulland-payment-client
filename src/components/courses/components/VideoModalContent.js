import React from 'react';
import leftArray from './left-arrow.png';
import rightArray from './right-arrow.png';
import "./video-modal.css";

export default (props) => (
  <div>
    <div id="video-modal-header">
      <h2>
        <img src={leftArray} alt="go left" className="video-modal-arrow" onClick={props.prev} />
        {props.step+1} / {props.videos.length}
        <img src={rightArray} alt="go right" className="video-modal-arrow" onClick={props.next} />
      </h2>
    </div>
    <div id="video-modal-content">
      <iframe title="youtube video" id="video-modal-youtube-iframe" src={"https://www.youtube.com/embed/" + props.videos[props.step]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);