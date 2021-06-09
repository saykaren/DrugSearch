import React from "react";

const DrugInstructions = ({ sectionArray, title }) => {
  return (
    <div className="drugDetails">
      {sectionArray && sectionArray.map((des, indexDes) => (
        <div key={indexDes}>
          {" "}
          <div className="drugSectionTitle">{title}</div>
          <div>{des}</div>
        </div>
      ))}
    </div>
  );
};

export default DrugInstructions;
