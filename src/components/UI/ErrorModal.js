import Button from "./Button";
import Card from "./Card.js";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <footer className={classes.actions}>
            <Button>Okay</Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
