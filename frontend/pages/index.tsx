import Head from "next/head";
import Image from "next/image";
import banner1 from "@styles/images/banner-1.png";
import ButtonComp from "@components/Button";
import Card from "@components/Card";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name="keywords" content="Web developing" />
      </Head>
      <div>
        <div className="w-full h-[750px]">
          <Image src={banner1} alt="Pink banner" />
        </div>
        <div>
          <Card />
        </div>
      </div>
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
