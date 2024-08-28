import classes from "../css/App.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    
  );
};

export default Card;
