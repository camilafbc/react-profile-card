import styles from "./styles.module.css";
// import imgProfile from "../../assets/97132028.jpg";
import Name from "../Name";
import Info from "../Info";
import Button from "../Button";

function Card({ photo, name, bio, telefone, email }) {
  return (
    <>
      <main className={styles.main}>
        <img src={photo} />
        <Name>
          <span>{name}</span>
          <button>Follow</button>
        </Name>
        <Info>{bio}</Info>
        <Info>{telefone}</Info>
        <Info>{email}</Info>
        <div className={styles.btn_container}>
          <Button textAncora="GitHub" ancora="https://github.com/camilafbc" />
          <Button
            textAncora="LinkedIn"
            ancora="https://www.linkedin.com/in/camilafbcoelho/"
          />
          <Button
            textAncora="Instagram"
            ancora="https://instagram.com/camilafbc"
          />
        </div>
      </main>
    </>
  );
}

export default Card;
