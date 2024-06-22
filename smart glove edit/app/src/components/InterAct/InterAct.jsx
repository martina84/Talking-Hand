import React, { } from 'react';
import './InteractGlove.css'; // Import external CSS file
import image2 from '../../Assets/lovepik-international-day-of-the-deaf-png-image_401801577_wh1200.png';


export default function InterAct() {
  
  return (
    <>
      <div className='container'>
        <div className="interact-glove ">
          <h2 className="mb-2 d-flex justify-content-center Align-item-center color">
            How Talking Hand Interacts With People
          </h2>
          <div className="glove-container">
            <img className="w-50" src={image2} alt="Talking Hand" />

            <p className="description ">
              This component represents the idea of the Talking Hand. The
              Life Track reads hand movements and resistances, then converts them
              into understandable data that can be displayed on the
              user interface.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
