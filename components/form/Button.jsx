//
//

export default function Button(props) {
  return (
    <div>
      <button
        type="submit"
        className="w-1/3 py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-green-800 hover:bg-green-500"
      >
        {props.title}
      </button>
    </div>
  );
}
