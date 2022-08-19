import { FC } from "react";
import { connect } from "react-redux";
import Status from "../components/Status";
import { IDialog, IUser } from "../types/types";

type Props = {
  currentDialogId?: string;
  dialogs?: IDialog[];
  user?: IUser;
};

const StatusContainer: FC<Props> = ({ currentDialogId, dialogs, user }) => {
  if ((dialogs && !dialogs.length) || !currentDialogId) {
    return null;
  }
  const currentDialogObj =
    dialogs &&
    dialogs.filter((dialog: any) => dialog._id === currentDialogId)[0];
  let partner: any = {};

  if (currentDialogObj && user && currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj && currentDialogObj.author;
  }

  return <Status online={partner.isOnline} fullName={partner.fullName} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
  user: user.data,
}))(StatusContainer);
