import styled from "@emotion/styled";

export const CurrentDialog = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const CurrentDialogHeader = styled.header`
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
