//
//
import Image from "next/image";

function Thumbnail(props) {
  return (
    <div className="p-2">
      <Image layout="responsive" src={props.img} height={1080} width={1920} />

      <div className="p-2">
        <h2 className="mt-1 text-lg text-gray-900 font-semibold">
          {props.name}
        </h2>

        <h3 className="mt-1 text-base text-gray-600 font-extralight">
          {props.species}
        </h3>

        <p className="truncate max-w-md text-sm text-gray-900 font-normal">
          {props.info}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
