import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/auth/authOperations";
import styled from "styled-components";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Enter</Button>
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