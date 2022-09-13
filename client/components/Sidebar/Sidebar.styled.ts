import styled from "@emotion/styled";

export const Sidebar = styled.div`
  max-width: 370px;
  width: 100%;
  border-right: 1px solid #f7f7f7;
`;
export const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 23px 20px 23px 20px;
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 17px;
      line-height: 20px;
    }
  }
`;
export const SidebarIcon = styled.div`
  margin-right: 10px;
`;
export const SidebarIconEdit = styled.div`
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
export const SidebarDialogs = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 66px);

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #eaeaea;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bbbbbb;
    border-radius: 12px;
  }
`;
export const Modal = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  cursor: not-allowed;
  form {
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 6px black;
    border-radius: 6px;
    padding: 20px;
    cursor: default;
  }
`;
export const ModalTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;
export const ModalOverview = styled.h2`
  text-align: center;
  padding: 5px;
  margin: 10px 0 20px;
`;
export const ModalMessage = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
  margin-top: 15px;
  outline: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
`;
export const Submit = styled.button`
  width: 100%;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0 0 4px black;
`;
