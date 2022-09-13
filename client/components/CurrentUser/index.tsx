import Avatar from "../Avatar";
import { IUser } from "../../types/types";
import { FC } from "react";
import * as S from "./CurrentUser.styled";

type Props = {
  user: IUser;
};

const CurrentUser: FC<Props> = ({ user }) => {
  return (
    <S.UserContainer>
      {user && (
        <>
          <Avatar user={user} />
          <S.UserInfo>
            <S.Username>{user.fullName}</S.Username>
            <S.UserId>#{user._id}</S.UserId>
          </S.UserInfo>
        </>
      )}
    </S.UserContainer>
  );
};

export default CurrentUser;
