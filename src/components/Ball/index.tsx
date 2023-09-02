import React, { FC } from "react";

interface BallProps {
  className?: string;
}

export const Ball: FC<BallProps> = ({ className }) => <div className={`ball ${className}`}></div>;
