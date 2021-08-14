import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
} from "../styles/modal";
import { useContext } from "react";
import { AppContext } from "../App";

function ModalComponent(props) {
  const dispatch = useContext(AppContext)[1];

  const closeModal = () => {
    dispatch({ type: "toggleModal" });
  };
  return (
    // <div className={props.show ? "modal show-modal" : "modal hide-modal"}></div>
    <ModalBackdrop show={props.show} onClick={closeModal}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
        <ModalCloseButton onClick={closeModal} />
      </ModalContainer>
    </ModalBackdrop>
  );
}

export default ModalComponent;
