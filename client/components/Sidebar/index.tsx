import * as S from "./Sidebar.styled";
import Image from "next/image";
import DialogsContainer from "../../containers/DialogsContainer";
import { FC, FormEvent } from "react";
import Select from "react-select";
import { ThreeCircles } from "react-loader-spinner";

type Props = {
  user: any;
  modal: boolean;
  toggleModal: (bool: boolean) => void;
  users: any;
  onSearch: (value: string) => void;
  createDialog: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  messageValue: string;
  setMessageValue: (value: string) => void;
  selected: any;
  setSelected: (user: any) => void;
  isLoading: boolean;
};
const Sidebar: FC<Props> = ({
  user,
  modal,
  toggleModal,
  users,
  onSearch,
  createDialog,
  inputValue,
  setInputValue,
  messageValue,
  setMessageValue,
  selected,
  setSelected,
  isLoading,
}) => {
  const options = users.map((user: any) => {
    return {
      id: user._id,
      value: user.fullName,
      label: user.fullName,
    };
  });
  return (
    <S.Sidebar>
      <S.SidebarHeader>
        <div>
          <S.SidebarIcon>
            <Image src={"/social.png"} alt={"social"} width={18} height={18} />
          </S.SidebarIcon>
          <span>Список диалогов</span>
        </div>
        <S.SidebarIconEdit onClick={() => toggleModal(true)}>
          <Image src={"/editing.png"} alt={"editing"} width={18} height={18} />
        </S.SidebarIconEdit>
      </S.SidebarHeader>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <ThreeCircles
            height="120"
            width="120"
            color="#9b9b9b"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      )}
      <S.Modal isOpen={modal} onClick={() => toggleModal(false)}>
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            createDialog();
          }}
        >
          <S.ModalTitle>Создание диалога</S.ModalTitle>
          <hr />
          <S.ModalOverview>
            Выберите пользователя с которым хотите начать диалог просто нажав на
            него.
          </S.ModalOverview>
          <Select
            inputValue={inputValue}
            value={selected}
            options={options}
            onChange={(user: any) => {
              setSelected(user);
            }}
            onInputChange={(text: string) => {
              onSearch(text);
              setInputValue(text);
            }}
            placeholder="Имя или email"
          />
          <S.ModalMessage
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            placeholder="Введите первое сообщение..."
          />
          <S.Submit disabled={!messageValue || !selected}>СОЗДАТЬ</S.Submit>
        </form>
      </S.Modal>
      <S.SidebarDialogs>
        <DialogsContainer userId={user && user._id} />
      </S.SidebarDialogs>
    </S.Sidebar>
  );
};

export default Sidebar;
