import React from "react";
import "./WarningDevices.css"; // Import external CSS file

const WarningDevices = () => {
  return (
    <>
      <div className="container">
        <div className="warning-devices-container">
          {/* Tips Box */}
          <div className="warning-box tips-box">
            <h2>Tips for Interacting with Deaf </h2>
            <div className="tips">
              <div className="tip ">
                <i className="fa fa-arrow-right"></i>
                <p>Tip 1: Use clear and simple language when communicating.</p>
              </div>
              <div className="tip">
                <i className="fa fa-arrow-right"></i>
                <p>Tip 2: Use gestures or sign language if possible.</p>
              </div>
              <div className="tip">
                <i className="fa fa-arrow-right"></i>
                <p>
                  Tip 3: Avoid shouting, as it can be uncomfortable for some.
                </p>
              </div>
              <div className="tip">
                <i className="fa fa-arrow-right"></i>
                <p>
                  Tip 4: Maintain eye contact and face the person when speaking.
                </p>
              </div>
              <div className="tip">
                <i className="fa fa-arrow-right"></i>
                <p>
                  Tip 5: Use assistive devices like hearing aids or visual aids.
                </p>
              </div>
            </div>
          </div>

          <div className="warning-box warnings-box">
            <h2>Warnings for Interacting with Deaf </h2>
            <div className="warnings">
              <div className="warning">
                <i className="fa fa-exclamation-triangle"></i>
                <p>Warning 1: Avoid covering your mouth when speaking.</p>
              </div>
              <div className="warning">
                <i className="fa fa-exclamation-triangle"></i>
                <p>Warning 2: Don't assume they can lip-read.</p>
              </div>
              <div className="warning">
                <i className="fa fa-exclamation-triangle"></i>
                <p>Warning 3: Don't interrupt or finish their sentences.</p>
              </div>
              <div className="warning">
                <i className="fa fa-exclamation-triangle"></i>
                <p>Warning 4: Avoid talking while walking away from them.</p>
              </div>
              <div className="warning">
                <i className="fa fa-exclamation-triangle"></i>
                <p>Warning 5: Don't patronize or talk down to them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningDevices;
