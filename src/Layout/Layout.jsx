/* eslint-disable react/prop-types */
import Nav from "../components/Nav/Nav.jsx";
const Layout = ({ children }) => {
  return (
    <div className="bg-black text-gray-200">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
