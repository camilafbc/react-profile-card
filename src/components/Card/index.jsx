import styles from "./styles.module.css";
import Image from "../Image";
import imgProfile from "../../assets/97132028.jpg";
import Name from "../Name";
import Info from "../Info";
import Button from "../Button";

function Card(){
    return (
        <>
            <main className={styles.main}>
                <Image imgprofile={imgProfile}/>
                <Name name="Camila Fernanda"/>
                <hr/>
                <Info textContent="Frontend Developer"/>
                <hr/>
                <Info textContent="+55 35 990 000 000"/>
                <hr/>
                <Info textContent="camilafernanda914@gmail.com"/>
                <hr/>
                <div className={styles.btn_container}>
                    <Button textAncora="GitHub" ancora="https://github.com/camilafbc"/>
                    <Button textAncora="LinkedIn" ancora="https://www.linkedin.com/in/camilafbcoelho/"/>
                    <Button textAncora="Instagram" ancora="https://instagram.com/camilafbc"/>
                </div>
            </main>
        </>
    )
}

export default Card