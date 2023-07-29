import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <div>
      <label htmlFor="">
        Username: <input type="text" onChange={(event) => event.target.value} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
