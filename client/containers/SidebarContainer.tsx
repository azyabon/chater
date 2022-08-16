import { FC, useState } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { dialogsApi, userApi } from "../utils/api";

type Props = {
  user?: any;
};

const SidebarContainer: FC<Props> = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [selected, setSelected] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value: string) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then((users: any) => {
        setUsers(users.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const clearModal = () => {
    setIsLoading(false);
    setModal(false);
    setInputValue("");
    setMessageValue("");
    setSelected(null);
  };

  const createDialog = () => {
    setIsLoading(true);
    dialogsApi
      .create({
        partner: selected.id,
        text: messageValue,
      })
      .then(() => {
        clearModal();
      })
      .catch(() => {
        clearModal();
      });
  };

  return (
    <Sidebar
      user={user}
      modal={modal}
      toggleModal={setModal}
      onSearch={onSearch}
      users={users}
      createDialog={createDialog}
      inputValue={inputValue}
      setInputValue={setInputValue}
      messageValue={messageValue}
      setMessageValue={setMessageValue}
      selected={selected}
      setSelected={setSelected}
      isLoading={isLoading}
    />
  );
};

export default connect(({ user }) => ({
  user: user.data,
}))(SidebarContainer);
