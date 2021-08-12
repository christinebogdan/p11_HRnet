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

function Home(props) {
  const history = useHistory();

  const viewEmployees = () => {
    history.push("/employee-list");
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
          <Input type="text" id="first-name" />

          <Label htmlFor="last-name">Last Name</Label>
          <Input type="text" id="last-name" />

          <Label htmlFor="date-of-birth">Date of Birth</Label>
          {/* <Input id="date-of-birth" type="text" /> */}
          <DatePickerInput id="date-of-birth"></DatePickerInput>

          <Label htmlFor="start-date">Start Date</Label>
          {/* <Input id="start-date" type="text" /> */}
          <DatePickerInput id="start-date"></DatePickerInput>

          <Fieldset>
            <legend>Address</legend>

            <Label htmlFor="street">Street</Label>
            <Input id="street" type="text" />

            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" />

            <Label htmlFor="state">State</Label>
            <select name="state" id="state"></select>

            <Label htmlFor="zip-code">Zip Code</Label>
            <Input id="zip-code" type="number" />
          </Fieldset>

          <Label htmlFor="department">Department</Label>
          <Select name="department" id="department">
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
