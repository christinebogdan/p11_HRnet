import styled from "styled-components";

export const ModalBackdrop = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(51, 66, 87, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: auto;
  width: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  user-select: none;
`;

export const ModalCloseButton = styled.div`
 display: ${(props) => (props.showClose ? "flex" : "none")};
  width: 36px;
  height: 36px;
  background-color: rgb(84, 140, 168);
  border-radius: 18px;
  position: fixed;
  top: -18px;
  right: -18px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  transform: rotate(45deg)
  }
`;

export const ModalTextButton = styled.button`
  background-color: rgb(84, 140, 168);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 30px;
`;
