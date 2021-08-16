import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
} from "../styles/modal";
import React, { useEffect } from "react";

function Modal({
  showClose = true,
  escapeClose = true,
  clickClose = true,
  closeText = true,
  show,
  toggle,
  children,
}) {
  useEffect(() => {
    if (show) {
      block();
    }
  });

  const block = () => {
    document.body.classList.add("modal-open");
  };

  const unblock = () => {
    document.body.classList.remove("modal-open");
  };
  // why does e.key === "Escape" not work?
  const close = (e) => {
    console.log(e);
    if (clickClose && e.type === "click") {
      toggle();
    }
    if (e.type === "keydown" && (e.key === "Enter" || e.key === "Escape")) {
      console.log(e);
      toggle();
    }
    unblock();
  };

  return (
    <ModalBackdrop show={show} onClick={close} onKeyDown={close}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <ModalCloseButton
          onClick={close}
          onKeyDown={close}
          showClose={showClose}
        >
          <span
            style={{
              height: "100%",
            }}
          >
            +
          </span>
        </ModalCloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
}

export default Modal;

// const dispatch = useContext(AppContext)[1];
// why can't I do this?
// const { current: closeButton } = React.useRef();
