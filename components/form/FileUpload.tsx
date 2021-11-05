import React, { useRef } from 'react';

const FileUpload: React.FC = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (event: React.ChangeEvent<any>) => {
    inputRef?.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <div>
      <div className="p-5 m-10 relative border-4 border-dotted border-gray-300 rounded-lg">
        <div className="flex flex-col w-max mx-auto text-center">
          <label>
            <label
              htmlFor="Upload an Image"
              className="block text-m font-thin text-gray-700"
            >
            Upload an Image
            </label>
            <input
              data-type="file"
              name="image"
              // required
              accept="image/png, image/jpeg"
              ref={inputRef}
              onChange={handleChange}
              value="image"
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

export default FileUpload;
