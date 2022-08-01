import * as S from "./Dialogs.styled";
import Dialog from "../Dialog";
import { FC } from "react";
import { orderBy } from "lodash";
import Image from "next/image";

type Props = {
  items: any;
  userId?: number;
  onSearch: any;
  inputValue: string;
};

const Dialogs: FC<Props> = ({ items, userId, onSearch, inputValue }) => {
  return (
    <S.Dialogs>
      <S.DialogsSearch>
        <div
          style={{
            position: "absolute",
            bottom: 11,
            left: 30,
          }}
        >
          <Image src={"/search.png"} alt={"search"} width={20} height={20} />
        </div>
        <S.DialogsInput
          onChange={onSearch}
          value={inputValue}
          placeholder="Поиск среди контактов"
        ></S.DialogsInput>
      </S.DialogsSearch>
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <Dialog
            key={item.user._id}
            user={item.user}
            message={item}
            unRead={0}
            isMe={item.user._id === userId}
            isRead={item.isRead}
          />
        ))
      ) : (
        <S.NoDialogs>
          <Image src={"/nodata.png"} alt={"nodata"} width={64} height={64} />
          <span>Ничего не найдено</span>
        </S.NoDialogs>
      )}
    </S.Dialogs>
  );
};

export default Dialogs;
