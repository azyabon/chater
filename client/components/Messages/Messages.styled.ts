import styled from "@emotion/styled";
import { colors } from "../../styled";

export const Messages = styled.div``;
export const NoMessages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.2;
  margin-top: 60px;
  height: calc(100% - 147px);
  span {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
