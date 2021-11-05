//
//

interface Props {
  title: string;
  name: string;
  key: string;
  }

  const BasicInput: React.FC<Props> = ({ title, name, key }) => {

  return (
    <div>
      <label className="text-m font-thin text-gray-700">{title}</label>
      <div className="mt-1">
        <input
          data-type="text"
          key={key}
          name={name}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}

export default BasicInput;
