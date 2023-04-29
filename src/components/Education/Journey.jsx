import React from "react";
import Step from "./Step";
function Journey() {
  return (
    <div className="journey">
     
        <Step
          school="INPT SCHOOL OF ENGINEERING"
          study="Advanced Software Engineering for Digital services"
          year="2022-present"
        />
        <Step
          school="CPGE TÉTOUAN"
          study="Mathematics and Physics (MP)"
          year="2020-2022"
        />
        <Step
          school="LYCÉE MOHAMED 6 MARTIL"
          study="Baccalauréat - Mathematical Science B"
          year="2019-2020"
        />
     
    </div>
  );
}

export default Journey;
