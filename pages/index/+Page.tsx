import {SocialLinks} from "./SocialLinks";
import {Avatar} from "./Avatar";
import {Quote} from "./Quote";
import {ColorProvider} from "./ColorProvider";

export { Page }

const socialData = [
  { name: "github", url: "https://github.com/gvialetto" },
  { name: "linkedin", url: "http://www.linkedin.com/in/gvialetto" },
];

function Page() { 
  return (
    <>
      <SocialLinks socialData={socialData} />
      <ColorProvider>
        <Avatar />
        <Quote />
      </ColorProvider>
    </>
  )
}
