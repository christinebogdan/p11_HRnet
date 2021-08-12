import { useHistory } from "react-router-dom";
import DatePickerInput from "../modules/DatePickerInput";
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
  Select,
  Line,
} from "../styles/home";
import { useContext } from "react";
import { AppContext } from "../App";

function Home(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const viewEmployees = () => {
    history.push("/employee-list");
  };

  const handleChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  console.log(state);
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
          <Input type="text" id="first-name" onChange={handleChange} />

          <Label htmlFor="date-of-birth">Last Name</Label>
          <Input type="text" id="last-name" onChange={handleChange} />

          <Label htmlFor="date-of-birth">Date of Birth</Label>
          <DatePickerInput
            id="date-of-birth"
            onChange={handleChange}
          ></DatePickerInput>

          <Label htmlFor="start-date">Start Date</Label>
          <DatePickerInput
            id="start-date"
            onChange={handleChange}
          ></DatePickerInput>

          <Fieldset>
            <legend>Address</legend>

            <Label htmlFor="street">Street</Label>
            <Input id="street" type="text" onChange={handleChange} />

            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" onChange={handleChange} />

            <Label htmlFor="state">State</Label>
            <select name="state" id="state" onChange={handleChange}></select>

            <Label htmlFor="zip-code">Zip Code</Label>
            <Input id="zip-code" type="number" onChange={handleChange} />
          </Fieldset>

          <Label htmlFor="department">Department</Label>
          <Select name="department" id="department" onChange={handleChange}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Select>
          <Button onClick={() => console.log("hello")}>Save</Button>
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
