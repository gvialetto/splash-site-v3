import avatarUrl from './avatar.jpg'
import { MouseEvent, TouchEvent } from "react";
import { useColor, getBGColor } from "./ColorProvider";

export const Avatar = (): JSX.Element => {
  const { color, setRandomColor } = useColor()!;

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setRandomColor();
  };

  const classes = `
    transition ease-in shadow-lg duration-300 shadow-black/35 mx-auto
    rounded-full size-72 p-3 ${getBGColor(color)}
  `;

  return (
    <div className="mt-4">
      <img
        className={classes}
        onMouseEnter={handleEvent}
        onTouchEnd={handleEvent}
        src={avatarUrl}
        alt="Personal photo"
      />
    </div>
  );
};
