import React from "react";

function FileUpload(props) {
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
      <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
        <div class="input_field flex flex-col w-max mx-auto text-center">
          <label>
            <label
              for="Upload an Image"
              class="block text-m font-thin text-gray-700"
            >
              Upload an Image
            </label>
            <input
              class="text-sm cursor-pointer w-36 hidden"
              type="file"
              name="image"
              required
              accept="image/png, image/jpeg"
              //   ref={hiddenFileInput}
              // onChange={handleChange}
              //   value={props.value}
            />
            <div class="text-sm  focus:ring-green-500 bg-green-800 text-white rounded cursor-pointer p-1 px-3 hover:bg-green-500">
              Select
            </div>
          </label>

          <div class="text-sm font-thin text-gray-700">or drop file here</div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;