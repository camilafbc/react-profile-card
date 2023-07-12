import { useState } from "react";
import styles from "./styles.module.css";
import Name from "../Name";
import Info from "../Info";
import Button from "../Button";

function Card({
  photo,
  name,
  bio,
  telefone,
  email,
  GitHubURL,
  LinkedInURL,
  InstaURL,
}) {

  const [buttonText, setButtonText] = useState("Follow")

  return (
    <>
      <main className={styles.main}>
        <img src={photo} />
        <Name>
          <span>{name}</span>
          <button
            onClick={() => setButtonText("Following")}
          >
            {buttonText}
          </button>
        </Name>
        <Info>{bio}</Info>
        <Info>{telefone}</Info>
        <Info>{email}</Info>
        <Info className={styles.btn_container}>
          <Button href={GitHubURL}>GitHub</Button>
          <Button href={LinkedInURL}>LinkedIn</Button>
          <Button href={InstaURL}>Instagram</Button>
        </Info>
      </main>
    </>
  );
}

export default Card;
