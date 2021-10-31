//
//
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/router";
import MarkdownEditor from "./MarkdownEditor";
import FileUpload from "./FileUpload";

export default function Form() {
  // const router = useRouter();

  // const plant = {
  //   name: "",
  //   species: "",
  //   info: "",
  //   image: "",
  // };

  // const handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const savePlant = async (e) => {
  //   e.preventDefault();
  //   const res = router.post("/api/add-plants", this.plant);
  // };

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
        // onSubmit={savePlant}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-blue-500 rounded-lg shadow-lg">
          {/* Column 1 */}
          <div className="w-full bg-green-400 overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-6 md:p-4 space-y-2">
              <Input
                for="Name"
                title="Name"
                name="name"
                // onChange={handleChange}
                // value={plant.name}
              />
              <Input
                for="species"
                title="Species"
                name="species"
                // onChange={handleChange}
                // value={plant.species}
              />
              <FileUpload />
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full bg-green-400 overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              <MarkdownEditor title="Details & Requirements" />
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
