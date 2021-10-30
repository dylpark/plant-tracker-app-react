import Head from "next/head";
import Header from "../components/Header";
import Form from "../components/form/Form";
import Footer from "../components/Footer";

export default function Add() {
  return (
    <div>
      <Head>
        <title>Plant Tracker</title>
      </Head>

      {/* Header/Nav */}
      <Header />

      {/* Add Plant Form */}
      <Form />

      <Footer />
    </div>
  );
}
