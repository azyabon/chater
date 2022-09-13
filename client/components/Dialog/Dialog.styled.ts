import styled from "@emotion/styled";
import { colors } from "../../styled";

export const Dialog = styled.div<{ active: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 7px 20px;
  min-width: 100%;
  height: 53px;
  :hover {
    background-color: #f3f7ff;
  }
  ${({ active }) => (active ? `background-color: #f3f7ff;` : `""`)}
`;
export const DialogAvatar = styled.div<{ online: boolean }>`
  position: relative;
  margin-right: 10px;
  min-width: 40px;
  ${({ online }) =>
    online
      ? `
      ::before {
            z-index: 1;
            position: absolute;
            bottom: 0;
            right: 0;
            display: block;
            content: "";
            background-color: ${colors.online_green};
            border-radius: 30px;
            width: 14px;
            height: 14px;
            border: 3px solid #fff;
        }
      `
      : `
            ""
      `}
`;
export const DialogInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
export const DialogInfoTop = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  b {
    flex: 1;
    font-weight: 600;
  }
  span {
    opacity: 0.5;
  }
`;
export const DialogInfoBottom = styled.div`
  display: flex;
  align-items: center;
  p {
    flex: 1;
    opacity: 0.5;
    font-size: 14px;
    line-height: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 200px;
    white-space: nowrap;
  }
`;
export const MessageCounter = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 12px;
  min-width: 20px;
  max-width: 35px;
  height: 20px;
  padding: 4px;
  background-color: ${colors.count_red};
  border-radius: 30px;
`;
