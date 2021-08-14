import { ModalContainer } from "../styles/modal";
import { useContext } from "react";
import { AppContext } from "../App";

function ModalComponent(props) {
  const [state, dispatch] = useContext(AppContext);

  const closeModal = () => {
    dispatch({ type: "toggleModal" });
  };
  return (
    // <div className={props.show ? "modal show-modal" : "modal hide-modal"}></div>
    <ModalContainer show={props.show} onClick={closeModal}>
      {props.children}
    </ModalContainer>
  );
}

export default ModalComponent;
