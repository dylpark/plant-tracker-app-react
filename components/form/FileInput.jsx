import React from "react";

export default function FileInput(props) {
  const hiddenFileInput = React.useRef(null);

  const handleFile = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <div>
      <div className="p-5 m-10 relative border-4 border-dotted border-gray-300 rounded-lg">
        <div className="flex flex-col w-max mx-auto text-center">
          <label>
            <label
              for="Upload an Image"
              className="block text-m font-thin text-gray-700"
            >
              {props.title}
            </label>
            <input
              type="file"
              name={props.name}
              required
              accept="image/png, image/jpeg"
              ref={hiddenFileInput}
              onChange={handleChange}
              value={props.value}
              className="text-sm cursor-pointer w-36 hidden"
            />
            <div className="text-sm  focus:ring-green-500 bg-green-800 text-white rounded cursor-pointer p-1 px-3 hover:bg-green-500">
              Select
            </div>
          </label>

          <div className="text-sm font-thin text-gray-700">
            or drop file here
          </div>
        </div>
      </div>
    </div>
  );
}
