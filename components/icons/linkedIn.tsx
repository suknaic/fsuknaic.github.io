import React from "react";
import { IconProps } from "@/lib/types";

const LinkedInIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 128 128">
   
    <path
      fill="currentColor"
      d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
    ></path>
  </svg>
);
export default LinkedInIcon;
