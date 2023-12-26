import '@fontsource/source-sans-pro/latin-400.css';
import '@fontsource/source-sans-pro/latin-300.css';
import { useColor, getTextColor } from "./ColorProvider";

export const Quote = (): JSX.Element => {
  const { color } = useColor()!;

  const classes = `tracking-wide transition font-semibold ease-in duration-300 ${getTextColor(color)}`;

  return (
    <blockquote
      style={{fontFamily:"'Source Sans Pro'"}}
      className="mt-6 subpixel-antialiased text-xl leading-relaxed text-center xl:ml-32 xl:mr-32"
      cite="https://en.wikipedia.org/wiki/Competent_man">
      <p>
        A human being should be able to change a diaper, plan an invasion,
        butcher a hog, conn a ship, design a building, write a sonnet, balance
        accounts, build a wall, set a bone, comfort the dying, take orders, give
        orders, cooperate, act alone, solve equations, analyze a new problem,
        pitch manure, program a computer, cook a tasty meal, fight efficiently,
        die gallantly.
        <strong className={classes}> Specialization is for insects.</strong>
      </p>
      <footer className="text-gray-400 font-light lg:text-end">
        — &nbsp;
        <a className="hover:underline" 
          href="https://en.wikipedia.org/wiki/Time_Enough_for_Love">
          Robert A. Heinlein, <cite>Time Enough for Love</cite>
        </a> 
      </footer>
    </blockquote>
  );
};
