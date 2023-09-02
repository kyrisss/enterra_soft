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
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "80vh", position: "relative" }}>
        <Block text={String(1)} className="block__bounce block__left" />
        <Ball className={`ball__bounce ${strike ? "ball__strike" : ""}`} />
        <Block text={String(2)} className="block block__right" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TimerButton onStart={toggleStrike} onEnd={toggleStrike} />
      </div>
    </div>
  );
};
