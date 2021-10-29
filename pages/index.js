//
//

import Head from "next/head";
import Header from "../components/Header";
import Plants from "../components/Plants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Plant Results */}
      <Plants />

      <footer>Dylan Park, 2021.</footer>
    </div>
  );
}

// Request to Database
// export async function getServerSideProps(context) {
//   const plants = context.query.plants;
// }
