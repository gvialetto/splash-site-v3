import socialUrl from "./socials.svg"

type SocialLinkProps = {
  name: string;
  url: string;
};

type SocialLinksProps = {
  socialData: SocialLinkProps[];
};

export {SocialLinks};

const SocialLink = ({ name, url }: SocialLinkProps): JSX.Element => (
  <a className="inline-block mx-2" href={url} id={name}>
    <svg
      className="fill-gray-800 transition-opacity duration-500 h-16 w-16 opacity-25 hover:opacity-100"
      viewBox="0 0 32 32"
    >
      <use xlinkHref={`${socialUrl}#${name}`}></use>
    </svg>
  </a>
);

const SocialLinks = ({ socialData }: SocialLinksProps): JSX.Element => (
  <div className="container content-center text-center">
    {socialData.map((item) => (
      <SocialLink key={item.name} name={item.name} url={item.url} />
    ))}
  </div>
);


