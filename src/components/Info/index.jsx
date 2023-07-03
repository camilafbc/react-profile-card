import style from "./style.module.css";

function Info ({ textContent }){
    return (
        <>
            <p className={style.text}>{textContent}</p>
        </>
    )
}

export default Info