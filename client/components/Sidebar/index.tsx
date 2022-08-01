import * as S from "./Sidebar.styled";
import Image from "next/image";
import DialogsFilter from "../../containers/DialogsFilter";

import dialogsJson from "../../dialogs.json";

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.SidebarHeader>
        <div>
          <S.SidebarIcon>
            <Image src={"/social.png"} alt={"social"} width={18} height={18} />
          </S.SidebarIcon>
          <span>Список диалогов</span>
        </div>
        <S.SidebarIconEdit>
          <Image src={"/editing.png"} alt={"editing"} width={18} height={18} />
        </S.SidebarIconEdit>
      </S.SidebarHeader>
      <S.SidebarDialogs>
        <DialogsFilter userId={0} items={dialogsJson.dialogs} />
      </S.SidebarDialogs>
    </S.Sidebar>
  );
};

export default Sidebar;
