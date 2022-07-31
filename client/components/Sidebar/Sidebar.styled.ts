import styled from "@emotion/styled";
import { colors } from "../../styled";

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
export const SidebarSearch = styled.div`
  position: relative;
  padding: 5px 20px 5px 20px;
  background-color: rgba(217, 217, 217, 0.4);
`;
export const SidebarInput = styled.input`
  width: 100%;
  outline: none;
  padding: 6px 11px 6px 40px;
  height: 38px;
  border-radius: 6px;
  border: 0;
  background-color: #f7f8f9;
  ::placeholder {
    opacity: 0.5;
    font-size: 14px;
  }
`;
export const SidebarDialogs = styled.div`
  overflow: auto;
  height: calc(100% - 115px);

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
