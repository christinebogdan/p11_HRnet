export const initialState = {
  createEmployee: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  },
  employeeList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "first-name":
      return {
        ...state,
        firstName: action.value,
      };
    case "last-name":
      return {
        ...state,
        lastName: action.value,
      };
    case "date-of-birth":
      return {
        ...state,
        dateOfBirth: action.value,
      };
    case "start-date":
      return {
        ...state,
        startDate: action.value,
      };
    case "street":
      return {
        ...state,
        street: action.value,
      };
    case "city":
      return {
        ...state,
        city: action.value,
      };
    case "state":
      return {
        ...state,
        state: action.value,
      };
    case "zip-code":
      return {
        ...state,
        zipCode: action.value,
      };
    case "department":
      return {
        ...state,
        department: action.value,
      };
    case "employeeList":
      return {
        ...state,
        employeeList: [...state.employeeList, action.value],
      };
    default:
      return state;
  }
};
