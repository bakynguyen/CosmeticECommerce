import Head from "next/head";

interface Props {
  products: any;
}
const PinkBaby: React.FC<Props> = (props) => {
  // console.log("products", products);
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name="keywords" content="Web developing" />
        {/* <link href="/dist/output.css" rel="stylesheet" /> */}
      </Head>
      <h1 className="text-red-500">PinkBaby</h1>
      <div>abc</div>
    </div>
  );
};

export default PinkBaby;

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
