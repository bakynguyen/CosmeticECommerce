import Layout from "../components/Layout";
import "antd/dist/antd.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
