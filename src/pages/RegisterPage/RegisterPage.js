import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../redux/auth/authOperations";
import styled from "styled-components";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return console.log("такий контакт вже існує");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === { name, email }) {
      console.log("This name already exists");
    }
    dispatch(registerUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <div>
        <h2>Register Page</h2>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            required={true}
          />
        </Label>
        <br />
        <Label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
        </Label>
        <br />
        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="8 symbols"
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Sign up</Button>
      </form>
    </Box>
  );
}

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  width: 100%;
`;

const Label = styled.div`
  padding-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14;
  font-style: normal;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;

  &:hover,
  &:focus {
    border: 1px solid transparent;
    background-color: rgb(1, 249, 236);
    color: white;
  }
`;
