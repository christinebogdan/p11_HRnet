import { useHistory } from "react-router-dom";
import Modal from "@christinebogdan/modal-plugin-react";
import {
  Container,
  H1,
  Button,
  FormContainer,
  H2,
  Form,
  Label,
  Input,
  Fieldset,
  Line,
} from "../styles/home";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { states } from "../helper/states";
import { departments } from "../helper/departments";
import styled from "styled-components";

const DatePickerInput = React.lazy(() => import("../modules/DatePickerInput"));
const SelectInputField = React.lazy(() =>
  import("../modules/SelectInputField")
);

export const Select = styled.select`
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  height: 25px;
  background-color: rgb(238, 238, 238);
  font-size: 16px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
    outline: none;
    border-bottom: 2px solid rgb(84, 140, 168);
  }
`;

function Home(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  /** Updates the document.title to "HRnet" */
  useEffect(() => {
    document.title = "HRnet";
  });

  /**
   * Redirect user to page /employee-list
   */
  const viewEmployees = () => {
    history.push("/employee-list");
  };

  /**
   * Updates state.createEmployee with every input change
   * @param {Object} e - The event object
   */
  const handleChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  /**
   * Creates new updated employee list.
   * Updates state.employeeList with new employee list.
   * Resets form input values to empty strings.
   * Changes showModal state to "true", to display modal.
   * Updates local storage with new list of employees
   * @param {Object} e - The event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.values(state.createEmployee);
    const newEmployeeList = [...state.employeeList, data];
    dispatch({ type: "employeeList", value: newEmployeeList });
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <H1>HRnet</H1>
        <Button onClick={viewEmployees}>View Current Employees</Button>
      </Container>
      <Line />
      <FormContainer>
        <H2>CREATE EMPLOYEE</H2>
        <Form>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            type="text"
            id="first-name"
            onChange={handleChange}
            value={state.createEmployee.firstName}
          />

          <Label htmlFor="date-of-birth">Last Name</Label>
          <Input
            type="text"
            id="last-name"
            onChange={handleChange}
            value={state.createEmployee.lastName}
          />

          <Label htmlFor="date-of-birth">Date of Birth</Label>
          <Input
            type="date"
            id="date-of-birth"
            value={state.createEmployee.dateOfBirth}
            onChange={handleChange}
          />
          {/* <Suspense fallback={<div>Loading...</div>}>
            <DatePickerInput
              id="date-of-birth"
              onChange={handleChange}
              value={state.createEmployee.dateOfBirth}
            ></DatePickerInput>
          </Suspense> */}

          {/* <Label htmlFor="start-date">Start Date</Label>
          <Suspense fallback={<div>Loading...</div>}>
            <DatePickerInput
              id="start-date"
              onChange={handleChange}
              value={state.createEmployee.startDate}
            ></DatePickerInput>
          </Suspense> */}
          <Label htmlFor="start-date">Start Date</Label>
          <Input
            type="date"
            id="start-date"
            value={state.createEmployee.startDate}
            onChange={handleChange}
          />

          <Fieldset>
            <legend>Address</legend>

            <Label htmlFor="street">Street</Label>
            <Input
              id="street"
              type="text"
              onChange={handleChange}
              value={state.createEmployee.street}
            />

            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              onChange={handleChange}
              value={state.createEmployee.city}
            />

            <Label htmlFor="state">State</Label>
            <Select
              onChange={handleChange}
              value={state.createEmployee.state}
              id="state"
            >
              {states.map((element, index) => {
                return (
                  <option value={element.name} text={element.name} key={index}>
                    {element.name}
                  </option>
                );
              })}
            </Select>
            {/* <Suspense fallback={<div>Loading...</div>}>
              <SelectInputField
                onChange={handleChange}
                value={state.createEmployee.state}
                id="state"
                data={states}
              />
            </Suspense> */}

            <Label htmlFor="zip-code">Zip Code</Label>
            <Input
              id="zip-code"
              type="number"
              onChange={handleChange}
              value={state.createEmployee.zipCode}
            />
          </Fieldset>

          <Label htmlFor="department">Department</Label>
          <Select
            onChange={handleChange}
            value={state.createEmployee.department}
            id="department"
          >
            {departments.map((element, index) => {
              return (
                <option value={element.name} text={element.name} key={index}>
                  {element.name}
                </option>
              );
            })}
          </Select>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <SelectInputField
              onChange={handleChange}
              value={state.createEmployee.department}
              id="department"
              data={departments}
            />
          </Suspense> */}
          <Button onClick={handleSubmit}>Save</Button>
          <Modal
            animation={true}
            show={showModal}
            toggle={setShowModal}
            closeText={{
              text: "View Current Employees",
              eventHandling: viewEmployees,
            }}
            blockScrolling={false}
          >
            <p>Employee Created!</p>
          </Modal>
        </Form>
      </FormContainer>
    </>
  );
}

export default Home;
