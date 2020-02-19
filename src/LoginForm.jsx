import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginForm.css";
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
      if(username == 'Bridgei2i' && password == 'Bi2i@123'){
          return true;
      } else{         
          return false;         
      }   
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  
  
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Link to="/product">
          <Button block bsSize="large" disabled={!validateForm()}  type="submit">
             Login
        </Button>
        </Link>
      </form>
    </div>
  );
}