//
//

import Image from "next/image";
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-start max-w-2xl">
        <HeaderItem
          title="Home"
          Icon={HomeIcon}
          href="http://localhost:3000/"
        />
        <HeaderItem
          title="Add"
          Icon={PlusCircleIcon}
          href="http://localhost:3000/add"
        />
      </div>
      <div className="flex flex-grow justify-end max-w-2xl">
        <h1 className="tracking-widest text-2xl mr-5 text-gray-900">
          Plant Tracker
        </h1>
        <Image
          className="object-contain"
          src={require("/public/plant.svg")}
          width={64}
          height={64}
        />
      </div>
    </header>
  );
}

export default Header;
