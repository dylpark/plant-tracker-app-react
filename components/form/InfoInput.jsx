//
//

export default function InfoInput(props) {
  return (
    <div>
      <label className="text-m font-thin text-gray-700">{props.title}</label>
      <div className="mt-1">
        <textarea
          type="text"
          // value={props.value}
          // onChange={props.onChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}
