import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchURL from "./../useQuery/fetchUrl";
import warning from "./../Assets/warning.png";

const Main = () => {
  const [fdaURL, setFdaUrl] = useState(
    "https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22ASPRIN%22&limit=10"
  );


  const drugData = useQuery(["drug", `${fdaURL}`], fetchURL);
  const [searchTerm, setSearchTerm] = useState("");

  console.log({ drugData });
  return (
    <div className="main_component">
      {drugData.status === "error" && <div>Error Fetching Data</div>}
      {drugData.status === "Loading" && <div>Loading Data....</div>}
      {drugData.status === "success" && drugData.data.results && (
        <>
          <section className="disclaimer">
            <img src={warning} className="icon" alt="disclaimer" />
            <a
              href={drugData.data.meta.terms}
              target="_blank"
              rel="noopener noreferrer"
            >
              {drugData.data.meta.disclaimer}{" "}
            </a>{" "}
            Last Updated: {drugData.data.meta.last_updated}{" "}
            <img src={warning} className="icon" alt="disclaimer" />
          </section>
          <section className="search">
              <input
              type="text"
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
              placeholder="Drug"
              id="drugInputSearch"/>
              <button>Submit</button>
          </section>
          <section>
            <h2>Results</h2>

            <div>
              {drugData.data.results.length > 0 &&
                drugData.data.results.map((results, indexResults) => (
                  <span key={indexResults}>
                                  <div className="drugDetails">
                      {results.package_label_principal_display_panel.map((des, indexDes) => (
                        <div key={indexDes}> Description: {des}</div>
                      ))}
                    </div>
                    <div className="drugDetails">
                      {results.dosage_and_administration.map(
                        (des, indexDes) => (
                          <div key={indexDes}> Description: {des}</div>
                        )
                      )}
                    </div>
                    <div className="drugDetails">
                      {results.indications_and_usage.map((des, indexDes) => (
                        <div key={indexDes}> Description: {des}</div>
                      ))}
                    </div>
                    <div className="drugDetails">
                      {results.geriatric_use.map((des, indexDes) => (
                        <div key={indexDes}> Geriatric Use: {des}</div>
                      ))}
                    </div>
                    <div className="drugDetails">
                      {results.pediatric_use.map((des, indexDes) => (
                        <div key={indexDes}> Pediatric Use: {des}</div>
                      ))}
                    </div>
                    <div className="drugDetails">
                      {results.information_for_patients.map((des, indexDes) => (
                        <div key={indexDes}> Patient Info: {des}</div>
                      ))}
                    </div>
                    <div className="drugDetails">
                      {results.warnings_and_cautions.map((des, indexDes) => (
                        <div key={indexDes}> Warnings: {des}</div>
                      ))}
                    </div>
                  </span>
                ))}
              {/* Description: {drugData.data.results[0].description.length > 0 && drugData.data.results.description.map((des, indexDes) =>{
                        <span>{des.x}</span>
                    })} */}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Main;
