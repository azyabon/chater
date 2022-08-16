import React, { FC, useEffect, useState } from "react";
import Dialogs from "../components/Dialogs";
import { connect } from "react-redux";
import { dialogsActions } from "../store/actions";
import socket from "../core/socket";

type Props = {
  items?: any;
  userId?: string;
  fetchDialogs?: any;
  setCurrentDialogId?: any;
  currentDialogId?: any;
};

const DialogsContainer: FC<Props> = ({
  items,
  userId,
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filtered, setFiltered] = useState<any>(Array.from(items));

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setFiltered(
      items.filter(
        (dialog: any) =>
          dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >=
            0 ||
          dialog.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );
    setInputValue(value);
  };

  const onNewDialog = (): void => {
    fetchDialogs();
  };

  useEffect((): any => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
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

export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(DialogsContainer);
