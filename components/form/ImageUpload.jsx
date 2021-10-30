//
//
import React from "react";

function ImageUpload(props) {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // const handleChange = (event) => {
  //   const fileUploaded = event.target.files[0];
  //   props.handleFile(fileUploaded);
  // };

  return (
    <div>
      <label for="Upload an Image" class="block text-m font-thin text-gray-700">
        Upload an Image
      </label>
      <div className="mt-3"></div>
      <button
        onClick={handleClick}
        className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Choose File
      </button>
      <input
        type="file"
        name="image"
        required
        accept="image/png, image/jpeg"
        ref={hiddenFileInput}
        // onChange={handleChange}
        value={props.value}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageUpload;
