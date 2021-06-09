import React from "react";

const DrugInstructions = ({ sectionArray, title }) => {
  return (
    <div className="drugDetails">
      {sectionArray &&
        sectionArray.map((des, indexDes) => (
          <details key={indexDes}>
            {" "}
            <summary className="drugSectionTitle">{title}</summary>
            <p>{des}</p>
          </details>
        ))}
    </div>
  );
};

export default DrugInstructions;
