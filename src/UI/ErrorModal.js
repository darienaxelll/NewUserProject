import Button from "./Button";
import Card from "./Card.js";
import classes from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>Modal</h2>
        </div>
        <div className={classes.content}>
          <p className={classes.content}>
            This is the message inside the modal.
          </p>
          <Button className={classes.actions}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
