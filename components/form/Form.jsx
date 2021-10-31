//
//
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
// import MarkdownEditor from "./MarkdownEditor";
// import FileUpload from "./FileUpload";
import Button from "./Button";

export default function Form() {
  const router = useRouter();
  const [markdown, setMarkdown] = useState();

  const plant = {
    name: "",
    species: "",
    info: "",
    image: "",
  };

  const handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const savePlant = async (e) => {
    e.preventDefault();
    const res = await router.post("/api/add-plants", this.plant);
  };

  const hiddenFileInput = React.useRef(null);

  const handleFile = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Add Your Plant!
        </h1>
      </div>

      <form
        className="mb-0 space-y-6"
        action="#"
        method="POST"
        onSubmit={savePlant}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-sm">
          {/* Column 1 */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-6 md:p-4 space-y-2">
              {/* Name Input */}
              <div>
                <label for="plant name" class="text-m font-thin text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleInput}
                    value={plant.name}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              {/* Species Input */}
              <div>
                <label for="species" class="text-m font-thin text-gray-700">
                  Species
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="species"
                    required
                    onChange={handleInput}
                    value={plant.name}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              {/* Image Input */}
              <div>
                <div className="p-5 m-10 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <label
                        for="Upload an Image"
                        className="block text-m font-thin text-gray-700"
                      >
                        Upload an Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        required
                        accept="image/png, image/jpeg"
                        ref={hiddenFileInput}
                        onChange={handleFile}
                        value={plant.image}
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
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              {/* Info Input */}
              <div>
                <label class="text-m font-thin text-gray-700">
                  Description & Requirements
                </label>
                <div className="mt-1">
                  <textarea
                    autofocus
                    value={plant.info}
                    onChange={handleInput}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-12">
          <div>
            <button
              type="submit"
              className="w-1/3 py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-green-800 hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
