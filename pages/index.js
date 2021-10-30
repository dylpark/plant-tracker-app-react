//
//

import Head from "next/head";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import Footer from "../components/Footer";

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

      <Footer />
    </div>
  );
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//   const plants = context.query.plants;
// }
