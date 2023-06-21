import React from "react";
import ButtonsGroup from "./common/Button";
import "./welcomesection.css";
import AnimatedArrows from "./AnimatedArrows";

function WelcomeSection() {
  return (
    <div className="welcome-section">
      <p>Fast cash for slow cars</p>
      <p>
        wji lorem opsem lorem opsem kdsjhfgiuofdgkfjhgfj jsabhdvgfhusdfdshufbdhj
      </p>
      <div className="button-section">
        <ButtonsGroup label="get an instance offer" icon={<AnimatedArrows />} />
        <ButtonsGroup label="tell me more" variant="light" />
      </div>
    </div>
  );
}

export default WelcomeSection;
