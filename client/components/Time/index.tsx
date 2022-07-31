import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
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
        locale: ruLocale,
      })}
    </S.Time>
  );
};

export default Time;
