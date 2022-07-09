import Head from "next/head";

import { Input } from "antd";

export default function Home({ products }) {
  // console.log("products", products);
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name="keywords" content="Web developing" />
        {/* <link href="/dist/output.css" rel="stylesheet" /> */}
      </Head>
      <h1 className="text-red-500">Welcomeaa</h1>
      <Input placeholder="Search" />
      <div>abc</div>
    </div>
  );
}

export const getStaticProps = async () => {
  let products = [];
  try {
    const res = await fetch("http://localhost:3000/products/store");
    products = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      products: products,
    },
  };
};
