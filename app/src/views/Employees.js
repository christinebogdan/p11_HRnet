import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import styled from "styled-components";
import Table from "../modules/Table";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: rgb(51, 66, 87);
  margin-bottom: 0;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: rgb(84, 140, 168);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 30px;
`;

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
        <Table employeeList={state.employeeList} />
        <Button onClick={viewHomepage}>Home</Button>
      </Container>
    </>
  );
}

export default Employees;
