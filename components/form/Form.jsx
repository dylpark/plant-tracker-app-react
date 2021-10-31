//
//
import Input from "./Input";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { useRouter } from "next/router";
import MarkdownEditor from "./MarkdownEditor";

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
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Add Your Plant!
        </h1>
      </div>

      {/* Column 1 */}
      <form
        className="mb-0 space-y-6"
        action="#"
        method="POST"
        // onSubmit={savePlant}
      />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div class="w-full md:w-2/5 h-80"></div>
          <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
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

            <div class="flex justify-start space-x-2"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div class="w-full md:w-2/5 h-80"></div>
          <div class="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
            <ImageUpload
              title="Upload an Image"
              name="image"
              // onChange={handleChange}
              // value={plant.image}
            />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>

            <MarkdownEditor title="Details & Requirements" />
          </div>
        </div>
      </div>
    </div>
  );
}
