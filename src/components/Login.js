import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = "";

  const login = (event) => {
    event.preventDefault();
    window.location.replace("/");
  };

  const handleUserName = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
};
