//
//

import Head from "next/head";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Plant Results */}
      <Thumbnail />

      <footer>Dylan Park, 2021.</footer>
    </div>
  );
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//   const plants = context.query.plants;
// }
