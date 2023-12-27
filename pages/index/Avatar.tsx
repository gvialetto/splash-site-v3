import avatarUrl from './avatar.jpg'
import { MouseEvent, TouchEvent } from "react";
import { useColor, getBGColor } from "./ColorProvider";
import "./Avatar.css"

export const Avatar = (): JSX.Element => {
  const { color, setRandomColor } = useColor()!;

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setRandomColor();
  };

  return (
    <div className="mt-4 drop-shadow-xl">
    <div className={`p-2 mask mask-decagon transition duration-300 ease-in ${getBGColor(color)}`}>
      <img
        className="size-72 mask mask-decagon mx-auto"
        onMouseEnter={handleEvent}
        onTouchEnd={handleEvent}
        src={avatarUrl}
        alt="Personal photo"
      />
    </div>
    </div>
  );
};
