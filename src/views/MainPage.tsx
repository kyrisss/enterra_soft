import React, { useState } from "react";

import { Ball } from "@components/Ball";
import { Block } from "@components/Block";
import { TimerButton } from "@components/TimerButton";

export const MainPage = () => {
  const [strike, setStrike] = useState(false);

  const toggleStrike = () => {
    setStrike((p) => !p);
  };

  return (
    <div>
      <div className="field">
        <Block text={String(1)} className="bounce block__left" />
        <div className="block-container">
          <Ball className={`bounce ${strike ? "strike" : ""}`} />
          <Block text={String(2)} className="block__right" />
        </div>
      </div>
      <div className="timer-container">
        <TimerButton onStart={toggleStrike} onEnd={toggleStrike} />
      </div>
    </div>
  );
};
