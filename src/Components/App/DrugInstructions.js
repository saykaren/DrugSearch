import React from "react";

const DrugInstructions = ({ sectionArray, title }) => {
  return (
    <>
      {sectionArray &&
        sectionArray.map((des, indexDes) => (
          <div className="drugDetails">
          <details key={indexDes}>
            {" "}
            <summary className="drugSectionTitle">{title}</summary>
            <p>{des}</p>
          </details>
          </div>
        ))}
  </>
  );
};

export default DrugInstructions;
