import React, { FC, useEffect, useState } from "react";
import Dialogs from "../components/Dialogs";
import { connect } from "react-redux";
import { dialogsActions } from "../store/actions";
import socket from "../core/socket";
import { IDialog } from "../types/types";

type Props = {
  items?: IDialog[];
  userId?: string;
  fetchDialogs?: () => void;
  setCurrentDialogId?: any;
  currentDialogId?: string;
};

const DialogsContainer: FC<Props> = ({
  items,
  userId,
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items || []));

  const onChangeInput = (e?: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e?.target.value || "";
    if (items) {
      setFiltered(
        items.filter(
          (dialog: IDialog) =>
            dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >=
              0 ||
            dialog.partner.fullName
              .toLowerCase()
              .indexOf(value.toLowerCase()) >= 0
        )
      );
    }
    setInputValue(value);
  };

  useEffect(() => {
    if (items?.length) {
      onChangeInput();
    }
  }, [items]);

  useEffect(() => {
    if (fetchDialogs) {
      fetchDialogs();

      socket.on("SERVER:DIALOG_CREATED", fetchDialogs);
      socket.on("SERVER:MESSAGE_CREATED", fetchDialogs);
    }
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs);
      socket.removeListener("SERVER:MESSAGE_CREATED", fetchDialogs);
    };
  }, []);

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
