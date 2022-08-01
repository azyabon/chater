import styled from "@emotion/styled";
import { colors } from "../../styled";

export const Dialogs = styled.div``;
export const DialogsInput = styled.input`
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
export const DialogsSearch = styled.div`
  position: relative;
  padding: 5px 20px 5px 20px;
  background-color: rgba(217, 217, 217, 0.4);
`;
export const NoDialogs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.2;
  margin-top: 60px;
  span {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
