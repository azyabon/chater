import * as S from "./Status.styled";
import { FC } from "react";

type Props = {
  online: boolean;
  fullName: string;
};

const Status: FC<Props> = ({ online, fullName }) => {
  return (
    <S.Status online={online}>
      <b>{fullName}</b>
      <div>{online ? "online" : "offline"}</div>
    </S.Status>
  );
};

export default Status;
