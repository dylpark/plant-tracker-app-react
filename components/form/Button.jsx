//
//

export default function Button(props) {
  return (
    <div>
      <button
        type="submit"
        className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {props.title}
      </button>
    </div>
  );
}
