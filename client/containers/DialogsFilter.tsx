import React, { FC, useEffect, useState } from "react";
import Dialogs from "../components/Dialogs";
import { connect } from "react-redux";
import { dialogsActions } from "../store/actions";

type Props = {
  items: any;
  userId?: number;
  fetchDialogs?: any;
  setCurrentDialogId?: any;
  currentDialogId: string | number;
};

const DialogsFilter: FC<Props> = ({
  items,
  userId,
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
}) => {
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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
  }, [items]);

  return (
    <Dialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(DialogsFilter);
