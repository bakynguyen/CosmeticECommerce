import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as IconGi from "react-icons/gi";
import * as IconHi from "react-icons/hi";
import * as IconMd from "react-icons/md";
import * as IconIo from "react-icons/io";
import InputComp from "@components/Input";
import { HeaderList } from "@constants/list";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const router = useRouter();
  const [currentPageObj, setCurrentPageObj] = useState(HeaderList["pink"]);
  console.log("currentPageObj", currentPageObj);
  return (
    <div className="fixed w-full z-10">
      <div className="grid grid-cols-4 grid-rows-1 cursor-pointer h-5 sm:h-10 md:h-10 lg:h-10 leading-5 sm:leading-10 md:leading-10 lg:leading-10 fz--10 sm:text-xs md:text-sm lg:text-base text-center font-bold">
        {Object.values(HeaderList).map((item) => (
          <div
            key={item.page}
            className={`background-color--${item.backgroundColor} color--${item.borderColor}`}
            // href={item.url}
            onClick={() => {
              router.push(item.url);
              setCurrentPageObj(HeaderList[item.page]);
            }}
          >
            {item.topContent.fontBold}
            <span className="font-light">{item.topContent.fontLight}</span>
          </div>
        ))}
      </div>
      <div
        className={`flex items-center h-24 border-b-2 border-${currentPageObj.borderColor} background-color--${currentPageObj.backgroundColor} pr-2`}
      >
        <div
          className={`text-center color--${currentPageObj.borderColor} w-1/6`}
        >
          <div className="text-6xl font-bold">{currentPageObj.tag.bigTag}</div>
          <div className="text-xs">{currentPageObj.tag.smallTag}</div>
        </div>
        <div className={`color--${currentPageObj.textColor} w-4/6`}>
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
        <div
          className={`color--${currentPageObj.textColor} flex items-center gap-3 w-1/6`}
        >
          <div
            className={`${
              currentPageObj.textColor === "white" ? "color--black" : ""
            }`}
          >
            <InputComp
              placeholder="SEARCH"
              icon={{ element: IconIo.IoIosSearch, position: "left" }}
              style={{
                border: currentPageObj.backgroundColor !== "white" && "none",
              }}
            />
          </div>
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
