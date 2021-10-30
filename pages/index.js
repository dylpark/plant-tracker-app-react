//
//

import Head from "next/head";
import Header from "../components/Header";
import Plants from "../components/Plants";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
        <link rel="icon" href="public/favicon.ico" />
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Plant Results */}
      <Plants />

      <Footer />
    </div>
  );
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//   const plants = context.query.plants;
// }
