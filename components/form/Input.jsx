//
//

function Input(props) {
  const plant = {
    name: "",
    species: "",
    info: "",
    img: "",
  };

  return (
    <div>
      <label for={props.for} class="text-m font-thin text-gray-700">
        {props.title}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          required
          onChange={this.handleInput}
          value={this.plant.name}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}

export default Input;
