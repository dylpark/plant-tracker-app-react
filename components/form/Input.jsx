//
//

function Name(props) {
  return (
    <div>
      <label for={props.for} class="block text-sm font-medium text-gray-700">
        {props.title}
      </label>
      <div className="mt-1">
        <input
          type="text"
          id={props.id}
          name={props.name}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}

export default Name;
