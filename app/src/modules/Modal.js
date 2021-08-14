import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
} from "../styles/modal";
import { useContext } from "react";
import { AppContext } from "../App";
import React, { useEffect } from "react";

function Modal(props) {
  const dispatch = useContext(AppContext)[1];
  // why can't I do this?
  // const { current: closeButton } = React.useRef();

  const closeButton = React.useRef(null);

  useEffect(() => {
    if (props.show) {
      closeButton.current.focus();
    }
  });

  // why does e.key === "Escape" not work?
  const closeModal = (e) => {
    e.type === "click" || e.key === "Enter"
      ? dispatch({ type: "toggleModal" })
      : console.log("no");

    // dispatch({ type: "toggleModal" });
  };

  return (
    <ModalBackdrop show={props.show} onClick={closeModal}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
        <ModalCloseButton
          onClick={closeModal}
          onKeyPress={closeModal}
          ref={closeButton}
          tabIndex="-1"
        >
          <p>+</p>
        </ModalCloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
}

export default Modal;
