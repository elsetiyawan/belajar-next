import CustomHeader from "./header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <CustomHeader />
      <div>{children}</div>
    </>
  );
};

export default Layout;
