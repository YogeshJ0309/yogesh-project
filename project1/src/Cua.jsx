import React from "react";
import { Member } from "./Member";
import { Nav } from "./Nav";

export const Cua = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Nav />

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h2 className="mt-3">Connect to CUA</h2>
              <p className="mt-5">
                Please Provide your Member Number to connect BudgetGuide to CUA
                Online Banking
              </p>
              <Member />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
