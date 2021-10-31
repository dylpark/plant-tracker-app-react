//
//
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/router";
import MarkdownEditor from "./MarkdownEditor";
import FileUpload from "./FileUpload";
import Button from "./Button";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-sm">
          {/* Column 1 */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
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
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              <MarkdownEditor title="Details & Requirements" />
            </div>
          </div>
        </div>
        <div className="text-center pb-12">
          <Button title="Submit" />
        </div>
      </form>
    </div>
  );
}
