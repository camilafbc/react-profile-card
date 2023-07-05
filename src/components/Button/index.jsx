import style from "./style.module.css";

function Button({children, href}){
    return (
        <>
            <a className={style.btn} href={href} target="_blank">
                {children}
            </a>
        </>
    )
}

export default Button