import Link from "next/link";
import * as IconGi from "react-icons/gi";
import * as IconHi from "react-icons/hi";
import * as IconMd from "react-icons/md";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-1 cursor-pointer h-5 sm:h-10 md:h-10 lg:h-10 leading-5 sm:leading-10 md:leading-10 lg:leading-10 fz--10 sm:text-xs md:text-sm lg:text-base text-center font-bold">
        <div className="background-color--white">PINK</div>
        <div className="background-color--black color--white">
          PINK<span className="font-light">COSMETICS</span>
        </div>
        <div className="background-color--pink color--white">
          PINK<span className="font-light">SKIN</span>
        </div>
        <div className="background-color--blue color--white">
          PINK<span className="font-light">BABY</span>
        </div>
      </div>
      <div className="flex items-center h-24 border-b-2 border-black background-color--pink">
        <div className="text-center w-1/6">
          <div className="text-6xl font-bold">PINK</div>
          <div className="text-xs">PINK COSMETICS</div>
        </div>
        <div className="w-4/6">
          <ul className="flex gap-4 fz--9 sm:text-xs md:text-sm lg:text-sm font-semibold">
            <li>
              <Link href="/">
                <a className="hover:underline hover:underline-offset-1">
                  LAVENDER BATH COLLECTION
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline hover:underline-offset-1">
                  SHOP SKIN
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a className="hover:underline hover:underline-offset-1">NEW</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a className="hover:underline hover:underline-offset-1">
                  BUNDLES & SET
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a className="hover:underline hover:underline-offset-1">
                  DISCOVER
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a className="hover:underline hover:underline-offset-1">SALE</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 w-1/6">
          <div>Search</div>
          <div>
            <IconGi.GiUsaFlag />
          </div>
          <div>
            <IconHi.HiOutlineUser />
          </div>
          <div>
            <IconMd.MdOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
