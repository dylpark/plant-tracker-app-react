//
//

function ImageUpload(props) {
  return (
    <div>
      <label for="Upload an Image" class="block text-m font-thin text-gray-700">
        Upload an Image
      </label>
      <div className="mt-3">
        <input
          type="file"
          name="image"
          required
          accept="image/png, image/jpeg"
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
    </div>
  );
}

export default ImageUpload;
