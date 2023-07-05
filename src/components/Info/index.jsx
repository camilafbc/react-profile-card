import style from "./style.module.css";

function Info ({ children }){
    return (
        <>
            <div className={style.text}>
                {children}
            </div>
        </>
    )
}

export default Info