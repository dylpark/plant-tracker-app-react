//
//

function ImageUpload() {
  return (
    <div>
      <label
        for="Upload an Image"
        class="block text-sm font-medium text-gray-700"
      >
        Upload an Image
      </label>
      <div className="mt-3">
        <input
          type="file"
          name="plantImage"
          required
          accept="image/png, image/jpeg"
        ></input>
      </div>
    </div>
  );
}

export default ImageUpload;
