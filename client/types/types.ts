export interface IMessage {
  _id: string;
  text: string;
  dialog: IDialog;
  unread: boolean;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}
export interface IDialog {
  _id: string;
  partner: IUser;
  author: IUser;
  lastMessage: IMessage;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUser {
  _id: string;
  email: string;
  fullName: string;
  password: string;
  confirmed?: boolean;
  avatar?: string;
  confirm_hash?: string;
  last_seen?: Date;
  createdAt: Date;
  updatedAt: Date;
}
