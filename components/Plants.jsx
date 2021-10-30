import Thumbnail from "./Thumbnail";
import plantData from "../pages/api/plantData";

const loadPlants = (plantData) => {
  return (
    <Thumbnail
      id={plantData.id}
      name={plantData.name}
      species={plantData.species}
      info={plantData.info}
      img={plantData.imgURL}
    />
  );
};

function Plants() {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {plantData.map(loadPlants)}
    </div>
  );
}

export default Plants;
