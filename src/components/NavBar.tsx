// @ts-ignore
import { HashLink } from "react-router-hash-link";

const links = ["Home", "Skills", "Projects", "About", "Contact"];

const NavBar = () => {
  return (
    <div className="h-[14vh] w-full bg-black flex z-[1000] justify-between items-center fixed p-4 px-7">
      <h1 className="text-white font-poppins text-3xl">
        AMAN <span className="text-red-600">VERMA</span>
      </h1>

      <div className="w-fit p-4 flex justify-around font-poppins items-center gap-9 text-white">
        {links.map((link) => (
          <HashLink
            key={link}
            smooth
            to={`#${link.toLowerCase()}`}
            className="
                    relative
                    text-white
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-full
                    after:bg-red-500
                    after:scale-x-0
                    after:origin-left
                    after:transition-transform
                    after:duration-300
                    hover:after:scale-x-100
                    after:rounded-lg
                  "

          >
            {link}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
