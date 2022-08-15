import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <h1></h1>
      </div>
    </Form>
  );
}

const Form = styled.form`
  margin: 5rem 20rem;

  @media screen and (max-width: 1280px) {
    margin: 5rem;
  }

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;
