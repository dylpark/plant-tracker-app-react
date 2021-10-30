//
//
import Image from "next/image";

function Plants(props) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      <div className="p-2">
        <Image layout="responsive" src={props.img} height={1080} width={1920} />

        <div className="p-2">
          <h2 className="mt-1 text-2xl text-gray-900 font-semibold">
            {props.name}
          </h2>

          <h3 className="mt-1 text-1xl text-gray-600">{props.species}</h3>

          <p className="truncate max-w-md text-gray-900">
            {props.wateringInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plants;
