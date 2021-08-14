import { useHistory } from "react-router-dom";
import DatePickerInput from "../modules/DatePickerInput";
import SelectInputField from "../modules/SelectInputField";
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
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { departments } from "../helper/departments";
import { states } from "../helper/states";

function Home(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

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
    console.log("on change", state);
  };

  /**
   * Updates state.employeeList with new employee and resets form input values to empty strings
   * @param {Object} e - The event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.values(state.createEmployee);
    dispatch({ type: "employeeList", value: data });
    console.log("on submit", state);
  };

  // wieso dreht sich onChange und value nicht im Kreis? https://reactgo.com/clear-input-field-value-react/
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
          <DatePickerInput
            id="date-of-birth"
            onChange={handleChange}
            value={state.createEmployee.dateOfBirth}
          ></DatePickerInput>

          <Label htmlFor="start-date">Start Date</Label>
          <DatePickerInput
            id="start-date"
            onChange={handleChange}
            value={state.createEmployee.startDate}
          ></DatePickerInput>

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
            <SelectInputField
              onChange={handleChange}
              value={state.createEmployee.state}
              data={states}
            />

            <Label htmlFor="zip-code">Zip Code</Label>
            <Input
              id="zip-code"
              type="number"
              onChange={handleChange}
              value={state.createEmployee.zipCode}
            />
          </Fieldset>

          <Label htmlFor="department">Department</Label>
          <SelectInputField
            onChange={handleChange}
            value={state.createEmployee.department}
            data={departments}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default Home;

// manage State to save input values
// const saveEmployee = () => {
//   const firstName = document.getElementById("first-name");
//   const lastName = document.getElementById("last-name");
//   const dateOfBirth = document.getElementById("date-of-birth");
//   const startDate = document.getElementById("start-date");
//   const department = document.getElementById("department");
//   const street = document.getElementById("street");
//   const city = document.getElementById("city");
//   const state = document.getElementById("state");
//   const zipCode = document.getElementById("zip-code");

//   const employees = JSON.parse(localStorage.getItem("employees")) || [];
//   const employee = {
//     firstName: firstName.value,
//     lastName: lastName.value,
//     dateOfBirth: dateOfBirth.value,
//     startDate: startDate.value,
//     department: department.value,
//     street: street.value,
//     city: city.value,
//     state: state.value,
//     zipCode: zipCode.value,
//   };
//   employees.push(employee);
//   localStorage.setItem("employees", JSON.stringify(employees));
//   $("#confirmation").modal();
// };
