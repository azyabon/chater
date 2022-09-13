import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import enUS from "date-fns/locale/en-US";
import { FC } from "react";

import * as S from "./Time.styled";

type Props = {
  date: number;
  isMe?: boolean | undefined;
};

const Time: FC<Props> = ({ date, isMe }) => {
  return (
    <S.Time isMe={isMe}>
      {distanceInWordsToNow(date, {
        addSuffix: true,
        locale: enUS,
      })}
    </S.Time>
  );
};

export default Time;
