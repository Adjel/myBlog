import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { COLORS } from "@/Constants";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Providers/UserProvider";
import Link from "next/link";
import { toast } from "react-toastify";

function LogForm({ logHandler, hrefDescription, loginOrRegister, href }) {
  const [crediential, setCredential] = useState({
    email: "",
    password: "",
  });

  const { user } = useContext(UserContext);
  const route = useRouter();
  const notify = (message) => toast(message);

  useEffect(() => {
    if (user) route.push("Home");
  }, [user]);

  function handleCredentialChange(event) {
    const { name, value } = event.target;
    setCredential({
      ...crediential,
      [name]: value,
    });
  }

  async function handleRegisterWithErrors() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (crediential.email === "") {
      return notify("Vous devez renseigner un email");
    }
    if (crediential.password === "")
      return notify("Vous devez renseigner un mot de passe");
    if (emailRegex.test(crediential.email))
      return notify("L'email renseigné est invalide");
    if (passwordRegex.test(crediential.password))
      return notify(
        "Votre mote de passe doit se composer au moins d'une majuscule, un caractère spécial, d'une minuscule,  d'un chiffre et d'au moins 8 caractères au total"
      );
    await logHandler(crediential, notify);
  }

  async function handleLoginWithErrors() {
    if (crediential.email === "")
      return notify("Vous devez renseigner un email");
    if (crediential.password === "")
      return notify("Vous devez renseigner un mot de passe");
    await logHandler(crediential, notify);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    if (loginOrRegister === "register") {
      await handleRegisterWithErrors();
    } else {
      await handleLoginWithErrors();
    }
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
            {loginOrRegister}
          </Button>
        </Form>
      </FormWrapper>
      <FormLink href={href}>{hrefDescription}</FormLink>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100vh;
  gap: ${16 / 16}rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${8 / 16}rem;
  min-width: 40%;
  min-height: 60%;
  border-radius: ${4 / 16}rem;
  border: 2px solid ${COLORS.Gray.lightGray};
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${8 / 16}rem;
  padding: ${8 / 16}rem;
  min-height: 80%;
`;

const Button = styled.button`
  background: ${COLORS.Gray.buttonDarkGray};
  border: 0.5px solid ${COLORS.primary};
  color: ${COLORS.Gray.buttonLightGray};
  width: ${64 / 16}rem;
  height: ${28 / 16}rem;

  &:hover {
    background: ${COLORS.primary};
    border: 0.5px solid ${COLORS.primary};
    color: black;
  }
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.primary};

  &:hover {
    color: ${COLORS.Gray.buttonDarkGray};
  }
`;

export default LogForm;
