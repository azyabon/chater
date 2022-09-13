import styled from "@emotion/styled";

export const CurrentDialog = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const CurrentDialogHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f7f7f7;
  min-height: 68px;
`;
export const CurrentDialogUser = styled.div`
  text-align: center;
  b {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
  }
`;
export const CurrentDialogStatus = styled.div<{ online: boolean }>`
  color: #bbbbbb;
  div::before {
    display: inline-block;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 30px;
    margin: 0 5px 1.5px 0;
    ${({ online }) =>
      online ? `background-color: #00c908;` : `background-color: #d3d3d3;`}
  }
`;
export const CurrentDialogChat = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 147px);
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
export const CurrentDialogMenu = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 25px;
  top: 33px;
  background-color: #fff;
  box-shadow: 0 0 4px black;
  border-radius: 4px;
  z-index: 9999;
  span {
    display: inline-block;
    padding: 5px 10px;
    text-align: center;
    width: 100%;
    font-size: 16px;
    border-bottom: 1px solid black;
    font-weight: 600;
    line-height: 20px;
    :last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background-color: #87adff;
      cursor: pointer;
      color: #fff;
    }
  }
`;
export const NoDialog = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.2;
  margin-top: 60px;
  span {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
export const OptionContainer = styled.div`
  min-width: 20px;
  cursor: pointer;
`;
