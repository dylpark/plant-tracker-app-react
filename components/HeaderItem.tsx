//
//
import Link from "next/link";

interface Props {
  Icon: any;
  title: string;
  href: string;
}

const Header: React.FC<Props> = ({ Icon, title, href }) => {
  return (
    <Link href={href} passHref>
      <div className="flex flex-col mr-2 items-center cursor-pointer group w-12 sm:w-20">
        <Icon
          className="h-8 mb-1 transition duration-150 ease-out transform hover:scale-110 text-gray-900"
          href={href}
        />
        <p className="tracking-widest font-thin hover:font-medium text-gray-900 ">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default Header;
