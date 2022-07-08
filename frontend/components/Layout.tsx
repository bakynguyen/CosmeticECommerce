import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
