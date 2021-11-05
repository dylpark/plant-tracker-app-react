//
//

interface Props {
  onChange: any;
}

const DetailsTextArea: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <label className="text-m font-thin text-gray-700">
        Details & Requirements
      </label>
      <div className="mt-1">
        <textarea className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
          data-type="text"
          name="info"
          // required
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default DetailsTextArea;
