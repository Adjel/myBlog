"use client";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/Constants";
import { UserContext } from "@/Providers/UserProvider";
import { useRouter } from "next/navigation";

export default function Register() {
  const [crediential, setCredential] = useState({
    email: "",
    password: "",
  });

  const { user, handleRegister } = useContext(UserContext);
  const route = useRouter();

  useEffect(() => {
    if (user) route.push("Home");
  });

  function handleCredentialChange(event) {
    const { name, value } = event.target;
    setCredential({
      ...crediential,
      [name]: value,
    });
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    await handleRegister(crediential);
  }

  return (
    <SectionWrapper>
      <FormWrapper>
        <Form>
          <label htmlFor="email">email:</label>
          <input
            id="email"
            name="email"
            value={crediential.email}
            onChange={(event) => handleCredentialChange(event)}
          ></input>
          <label htmlFor="password">mot de passe</label>
          <input
            id="password"
            name="password"
            value={crediential.password}
            onChange={(event) => handleCredentialChange(event)}
          ></input>
          <Button type="submit" onClick={(event) => handleOnSubmit(event)}>
            Register
          </Button>
        </Form>
      </FormWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(8 / 16 * 1rem);
  height: 50%;
  width: 50%;
  border-radius: calc(4 / 16 * 1rem);
  border: 2px solid ${COLORS.Gray.lightGray};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.Gray.lightGray};
`;

const Button = styled.button`
  color: ${COLORS.Gray.lightGray};
  background: none;
  border: none;
`;
