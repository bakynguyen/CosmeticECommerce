import UserLayout from "@components/UserLayout";
import "antd/dist/antd.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
  );
}

export default MyApp;
