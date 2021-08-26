import { useHistory } from "react-router-dom";
import React, { Suspense, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Container, H1, Button } from "../styles/employees";

const Table = React.lazy(() => import("../modules/Table"));

function Employees(props) {
  const history = useHistory();
  const state = useContext(AppContext)[0];

  useEffect(() => {
    document.title = "HRnet - Current Employees";
  });

  const viewHomepage = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <H1>Current Employees</H1>
        {/* <table>
          <thead>
            <tr>
              <TH>First Name</TH>
              <TH>Last Name</TH>
              <TH>Start Date</TH>
              <TH>Department</TH>
              <TH>Date of Birth</TH>
              <TH>Street</TH>
              <TH>City</TH>
              <TH>State</TH>
              <TH>Zip Code</TH>
            </tr>
          </thead>
          {state.employeeList.map((employee, index) => {
            return (
              <tr key={index}>
                {employee.map((entry, index) => {
                  return <td key={index}>{entry}</td>;
                })}
              </tr>
            );
          })}
        </table> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Table employeeList={state.employeeList} />
        </Suspense>
        <Button onClick={viewHomepage}>Home</Button>
      </Container>
    </>
  );
}

export default Employees;
