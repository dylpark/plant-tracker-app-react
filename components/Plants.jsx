import Thumbnail from "./Thumbnail";
import testPlantData from "../pages/api/testPlantData";

const loadPlants = (testPlantData) => {
  return (
    <Thumbnail
      id={testPlantData.id}
      name={testPlantData.name}
      species={testPlantData.species}
      info={testPlantData.info}
      img={testPlantData.imgURL}
    />
  );
};

function Plants() {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {testPlantData.map(loadPlants)}
    </div>
  );
}

export default Plants;
