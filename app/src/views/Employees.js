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
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
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
        </table>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Table employeeList={state.employeeList} />
        </Suspense> */}
        <Button onClick={viewHomepage}>Home</Button>
      </Container>
    </>
  );
}

export default Employees;
