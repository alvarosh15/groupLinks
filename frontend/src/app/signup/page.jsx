"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/auth/register", {
        url: url,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label for="url">url:</label>
        <input type="text" id="url" name="url" />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
