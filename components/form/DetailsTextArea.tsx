//
//
import {useState} from 'react'

interface Props {
  value: any;
  onChange: any;
}

const DetailsTextArea: React.FC<Props> = ({value, onChange}) => {

  return (
    <div>
      <label className="text-m font-thin text-gray-700">
        Details & Requirements
      </label>
      <div className="mt-1">
        <textarea className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
          value={value}
          onChange={onChange}
          name="info"
          placeholder="Tell us something special about this plant and how to keep it healthy!"
        />
      </div>
    </div>
  );
}

export default DetailsTextArea;
