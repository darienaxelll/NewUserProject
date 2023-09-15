import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import Wrapper from "../Helper/Wrapper";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
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
    );
  };

  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
