import Thumbnail from "./Thumbnail";
import testPlantData from "../pages/api/testPlantData";

const loadTestPlants = (testPlantData: any) => {
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

// const defaultEndpoint = "http://127.0.0.1:8000/api/plants";

// export async function getServerSideProps() {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// const loadPlants = ({ data }) => {
//   const { results = [] } = data;
//   {
//     results.map((result) => {
//       const { id, name, species, info, image } = result;
//     });
//   }
//   return (
//     <Thumbnail
//       key={data.id}
//       name={data.name}
//       species={data.species}
//       info={data.info}
//       img={data.imgURL}
//     />
//   );
// };

const Plants: React.FC = () => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {testPlantData.map(loadTestPlants)}
      {/* {data.map(loadPlants)} */}
    </div>
  );
}

export default Plants;
