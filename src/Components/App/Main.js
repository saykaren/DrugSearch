import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchURL from "./../useQuery/fetchUrl";
import warning from "./../Assets/warning.png";
import DrugInstructions from "./DrugInstructions";

const Main = () => {
  // Abreva - another drug to search
  // Aceon -- not found
  const [finalSearchTerm, setFinalSearchTerm] = useState("Asprin");
  const [fdaURL, setFdaUrl] = useState(
    `https://api.fda.gov/drug/label.json?search=openfda.brand_name:`
  );

  const drugData = useQuery(
    ["drug", `${fdaURL}`, `${finalSearchTerm}`],
    fetchURL
  );
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main_component">
      {drugData.status === "error" && <div>NO DATA: Error Fetching Data</div>}
      {drugData.status === "Loading" && <div>Loading Data....</div>}
      {drugData.status === "success" && (
        <>
          {drugData.data.results && (
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
          )}
          <section className="search">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Prescription Drug"
              id="drugInputSearch"
            />
            <button onClick={() => setFinalSearchTerm(searchTerm)}>
              SEARCH
            </button>
          </section>
          {drugData.data.results && (
            <section>
              <h2>Results: {finalSearchTerm}</h2>

              <div>
                {drugData.data.results.length > 0 &&
                  drugData.data.results.map((results, indexResults) => (
                    <span key={indexResults}>
                      <DrugInstructions
                        sectionArray={
                          results.package_label_principal_display_panel
                        }
                        title="Description"
                      />
                      <DrugInstructions
                        sectionArray={results.dosage_and_administration}
                        title="Description"
                      />
                      <DrugInstructions
                        sectionArray={results.indications_and_usage}
                        title="Description"
                      />
                      <DrugInstructions
                        sectionArray={results.geriatric_use}
                        title="Geriatric Use"
                      />
                      <DrugInstructions
                        sectionArray={results.pediatric_use}
                        title="Pediatric Use"
                      />
                      <DrugInstructions
                        sectionArray={results.information_for_patients}
                        title="Patient Info"
                      />

                      <DrugInstructions
                        sectionArray={results.warnings_and_cautions}
                        title="Warnings"
                      />
                    </span>
                  ))}
              </div>
            </section>
          )}
        </>
      )}
      {drugData.status === "success" && drugData.data.error && (
        <section className="main_component">
          <h2>
            {searchTerm} {drugData.data.error.code && drugData.data.error.code}{" "}
          </h2>
          <div>
            {drugData.data.error.message && drugData.data.error.message}
          </div>
        </section>
      )}
    </div>
  );
};

export default Main;