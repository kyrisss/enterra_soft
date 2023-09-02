import React, { FC, useEffect, useState } from "react";

import { Button } from "@components/Button";

interface TimerButtonProps {
  onEnd?: () => void;
  onStart?: () => void;
}

const INITIAL_VALUE = 5;

export const TimerButton: FC<TimerButtonProps> = ({ onStart, onEnd }) => {
  const [enabled, setEnabled] = useState(false);
  const [timer, setTimer] = useState(INITIAL_VALUE);

  const toggleTimer = () => {
    setEnabled((p) => !p);
  };

  const onClickHandler = () => {
    console.log({ enabled, timer });
    toggleTimer();
    onStart && onStart();
  };

  useEffect(() => {
    if (!enabled) return;

    const intervalId = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [enabled]);

  useEffect(() => {
    if (timer === 0) {
      toggleTimer();
      setTimer(INITIAL_VALUE);
      onEnd && onEnd();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return <Button text={enabled ? String(timer) : "start"} onClick={onClickHandler} disabled={enabled} />;
};
