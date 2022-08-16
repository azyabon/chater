import * as S from "./Dialogs.styled";
import Dialog from "../Dialog";
import { FC } from "react";
import { orderBy } from "lodash";
import Image from "next/image";

type Props = {
  items: any;
  userId?: string;
  onSearch: any;
  inputValue: string;
  onSelectDialog: any;
  currentDialogId: string | number;
};

const Dialogs: FC<Props> = ({
  items,
  userId,
  onSearch,
  inputValue,
  onSelectDialog,
  currentDialogId,
}) => {
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
        orderBy(items, ["created_at"], ["desc"]).map((item) => {
          return (
            <Dialog
              onSelect={onSelectDialog}
              key={item.author._id}
              isMe={item.lastMessage.user._id === userId}
              currentDialogId={currentDialogId}
              {...item}
            />
          );
        })
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
