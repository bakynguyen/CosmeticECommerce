import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
}

const UserLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        <div className="pt-[8.5rem]">{children}</div>
      </main>
    </div>
  );
};

export default UserLayout;
