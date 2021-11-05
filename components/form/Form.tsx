//
//

import React from "react";
// import { useState } from "react";
import axios from "axios";
import DetailsTextArea from "./DetailsTextArea";
import FileUpload from "./FileUpload";
import BasicInput from "./BasicInput";
import SubmitBtn from "./SubmitBtn";

const api = axios.create({
  baseURL: `http://localhost:8000/api`
})

const createPlant = async () => {

  let res = await api.post('/add-plant', { 
    name: "",
    species: "",
    info: "",
  }).catch((error) => {
    console.log(error, 'Error'); error_list: error.response.data.validate_err
  })
  console.log(res)
}

const Form: React.FC = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Add Your Plant!
        </h1>
      </div>

      <form className="mb-0 space-y-6" 
      action="http://localhost:8000/api/add-plant" 
      method="POST" 
      onSubmit={createPlant}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 bg-white rounded-lg shadow-sm">
          {/* Column 1 */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              {/* Name Input */}
              <BasicInput
                key="1"
                title="Name"
                name="name"
              />
              {/* Species Input */}
              <BasicInput
                key="2"
                title="Species"
                name="species"
              />
              {/* File Input */}
              <FileUpload
                key="3"
                // title="Upload an Image"
                // name="image"
                // value={image}
              />
            </div>
          </div>

          {/* Column 2 - Text Area */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              {/* Info Input */}
              <DetailsTextArea
                key="4"
                onChange={""}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pb-12">
          <div>
            <SubmitBtn />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

