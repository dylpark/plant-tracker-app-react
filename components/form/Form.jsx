//
//

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TextInput from "./TextInput";
// import MarkdownEditor from "./MarkdownEditor";
import FileInput from "./FileInput";
// import Button from "./Button";

export default function Form() {
  // const [markdown, setMarkdown] = useState();
  // const router = useRouter();

  const plant = {
    name: "",
    species: "",
    info: "",
    image: "",
  };

  const handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const savePlant = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/add-plant", plant);
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        species: "",
        info: "",
        image: "",
      });
    }
  };

  const hiddenFileInput = React.useRef(null);

  const handleFile = (e) => {
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
              <TextInput
                for="plant name"
                title="Name"
                name="name"
                onChange={handleChange}
                value={plant.name}
              />
              {/* Species Input */}
              <TextInput
                for="species name"
                title="Species"
                name="species"
                onChange={handleChange}
                value={plant.species}
              />
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
                    onChange={handleChange}
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
