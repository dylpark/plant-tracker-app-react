//
//

import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Plant Results */}

      <footer>Dylan Park, 2021.</footer>
    </div>
  );
}
