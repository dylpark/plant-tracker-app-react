//
//

import Head from "next/head";
import Header from "../components/Header";
import Plants from "../components/Plants";
import plantData from "./api/plantData";

const loadPlants = (plantData) => {
  return (
    <Plants
      id={plantData.id}
      name={plantData.name}
      species={plantData.species}
      wateringInstructions={plantData.wateringInstructions}
      img={plantData.imgURL}
    />
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Plant Results */}
      <div>{plantData.map(loadPlants)}</div>

      <footer>Dylan Park, 2021.</footer>
    </div>
  );
}

// Request to Database
// export async function getServerSideProps(context) {
//   const plants = context.query.plants;
// }
