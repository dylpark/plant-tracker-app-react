//
//

function Name(props) {
  return (
    <div>
      <label for={props.for} class="text-m font-thin text-gray-700">
        {props.title}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={props.name}
          required
          onChange={props.onChange}
          value={props.value}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}

export default Name;
