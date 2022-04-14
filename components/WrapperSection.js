import React, { Children } from "react";

function WrapperSection(props) {
  return (
    <div className="container main-font lg:w-5/6 m-auto py-5 mt-20 mb-4 ">
      {props.children}
    </div>
  );
}

export default WrapperSection;
