import React, { FC } from "react";

interface BlockProps {
  className?: string;
  text: string;
}

export const Block: FC<BlockProps> = ({ className, text }) => <div className={`block ${className}`}>{text}</div>;
