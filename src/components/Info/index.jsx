import style from "./style.module.css";

function Info(props) {
  return (
    <div {...props} className={`${style.text} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Info;
