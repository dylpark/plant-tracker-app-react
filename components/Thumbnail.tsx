//
//
interface Props {
  id: string;
  name: string;
  species: string;
  info: string;
  img: any;
}

const Thumbnail: React.FC<Props> = ({ id, name, species, info, img }) => {
  return (
    <div key={id} className="p-2">
      <img
        className="object-cover h-60 w-full"
        data-layout="responsive"
        src={img}
        alt={name}
      />

      <div className="p-2">
        <h2 className="mt-1 text-lg text-gray-900 font-semibold">
          {name}
        </h2>

        <h3 className="text-base text-gray-600 font-thin">{species}</h3>

        <p className="max-w-md text-sm text-gray-900 font-normal">
          {info}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;