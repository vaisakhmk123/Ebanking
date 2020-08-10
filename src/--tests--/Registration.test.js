  
import { registerUser } from "../actions";
import RegistrationReducer from "../reducers/RegistrationReducer";

const initialState = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  address1: "",
  address2: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  pan: "",
  contact_no: "",
  dob: "",
  account_type: "",
};


const newState = {
    fullname: "VAISAKH MK",
    email: "",
    username: "",
    password: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    pan: "",
    contact_no: "",
    dob: "",
    account_type: "",
  };

describe("user registration reducer", () => {
//   it("it should return the initial state", () => {
//     // expect(RegistrationReducer(registerUser(),{})).toEqual(initialState);
//   });
  it("should add register to the store", () => {
    expect(
        RegistrationReducer(initialState, {
        type: registerUser(),
        value: (initialState.fullname = "VAISAKH MK"),
      })
    ).toEqual(newState);
  });
});