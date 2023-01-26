import React from "react";
import NavBar from "./NavBar";

const layout = ({ children }) => {
  return <div>
    <NavBar />
    <main className='container max-w-7xl mx-auto mt-6'>{children}</main>
    
    </div>;
};

export default layout;
