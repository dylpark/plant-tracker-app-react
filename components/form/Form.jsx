//
//
import Input from "./Input";
import ImageUpload from "./ImageUpload";

function Form() {
  return (
    <div className="flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Add Your Plant!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <Input for="name" title="Plant Name" id="name" name="name" />
            <Input for="species" title="Species" id="species" name="species" />
            <Input
              for="info"
              title="Plant Details & Requirements"
              id="info"
              name="info"
            />

            <ImageUpload title="Upload an Image" id="name" name="name" />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
