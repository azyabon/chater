import React, { FC, useState } from "react";
import Dialogs from "../components/Dialogs";

type Props = {
  items: any;
  userId?: number;
};

const DialogsFilter: FC<Props> = ({ items, userId }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filtered, setFiltered] = useState<any>(Array.from(items));

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFiltered(
      items.filter(
        (dialog: any) =>
          dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(e.target.value);
  };

  return (
    <Dialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default DialogsFilter;
