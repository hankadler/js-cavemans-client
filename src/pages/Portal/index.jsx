import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import state from "../../common/state";

const LOGIN = gql`
  mutation Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      _id
      name
      role
    }
  }
`;

export default function Portal() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDisabled, setPasswordDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [login] = useMutation(LOGIN, { variables: { name, password } });
  const [alert, setAlert] = useState("");
  const setUser = useSetRecoilState(state.user);
  const navigate = useNavigate();

  const onChangeName = async ({ target: { value } }) => setName(value);
  const onChangePassword = async ({ target: { value } }) => setPassword(value);

  // on change: name
  useEffect(() => setPasswordDisabled(name.length < 1), [name]);

  // on change: password
  useEffect(() => setSubmitDisabled(password.length < 1), [password]);

  // on change: alert
  useEffect(() => {
    setTimeout(() => {
      setName("");
      setPassword("");
      setAlert("");
    }, 3000);
  }, [alert]);

  const onLog = async () => {
    try {
      const { data } = await login();
      setUser(data.login.name);
    } catch (e) {
      return setAlert(e.message);
    }
    console.log("Logged in.");
    return navigate("/home");
  };

  const onKeyPressPassword = async ({ key }) => {
    if (key === "Enter") await onLog();
  };

  return (
    <PortalForm>
      <h1>Login</h1>
      <Row>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={onChangeName} />
      </Row>
      <Row>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          disabled={passwordDisabled}
          onKeyPress={onKeyPressPassword}
        />
      </Row>
      <footer>
        <button type="button" className="btn" onClick={onLog} disabled={submitDisabled}>
          Submit
        </button>
        <Alert hidden={!alert}>{alert}</Alert>
      </footer>
    </PortalForm>
  );
}

const PortalForm = styled.form`
  display: grid;
  grid-gap: 1em;
  align-content: start;
  justify-content: center;

  & > h1 {
    text-align: center;
    margin: 0;
  }

  & label {
    text-align: right;
  }
  
  & > footer {
    display: grid; 
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 8em 16em;
  grid-gap: .5em;
  align-content: start;
`;

const Alert = styled.pre`
  border-radius: 4px;
  padding: .25em;
  color: white;
  background-color: indianred;
`;
