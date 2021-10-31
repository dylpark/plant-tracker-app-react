//
//

export default function Thumbnail(props) {
  return (
    <div key={props.key} className="p-2">
      <img
        className="object-cover h-60 w-full"
        layout="responsive"
        src={props.img}
        alt={props.name}
      />

      <div className="p-2">
        <h2 className="mt-1 text-lg text-gray-900 font-semibold">
          {props.name}
        </h2>

        <h3 className="text-base text-gray-600 font-thin">{props.species}</h3>

        <p className="max-w-md text-sm text-gray-900 font-normal">
          {props.info}
        </p>
      </div>
    </div>
  );
}
