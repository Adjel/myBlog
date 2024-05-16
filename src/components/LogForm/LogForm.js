import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { COLORS } from "@/Constants";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Providers/UserProvider";
import { ToastContainer, toast } from "react-toastify";

function LogForm({ logHandler, loginOrRegister, redirection }) {
  const [crediential, setCredential] = useState({
    email: "",
    password: "",
  });

  const { user } = useContext(UserContext);
  const route = useRouter();
  const notify = (message) => toast(message);

  useEffect(() => {
    if (user) route.push(redirection);
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
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (crediential.email === "")
      return notify("Vous devez renseigner un email");
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

export default LogForm;
