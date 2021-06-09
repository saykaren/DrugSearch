import React from "react";

const DrugInstructions = ({ sectionArray, title }) => {
  return (
    <div className="drugDetails">
      {sectionArray && sectionArray.map((des, indexDes) => (
        <div key={indexDes}>
          {" "}
          {title}: {des}
        </div>
      ))}
    </div>
  );
};

export default DrugInstructions;
