import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-[1152px] mx-auto  ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
