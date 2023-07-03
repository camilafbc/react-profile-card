import style from "./style.module.css";

function Button({ textAncora, ancora}){
    return (
        <>
            <a className={style.btn} href={ancora} target="_blank">{textAncora}</a>
        </>
    )
}

export default Button