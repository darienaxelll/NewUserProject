import Button from "./Button";
import Card from "./Card";
import Wrapper from "../Helper/Wrapper"
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </div>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
