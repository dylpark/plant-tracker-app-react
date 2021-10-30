import Head from "next/head";
import Header from "../components/Header";
import Form from "../components/form/Form";

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

      <footer>Dylan Park, 2021.</footer>
    </div>
  );
}
