import * as S from "./Sidebar.styled";
import Dialogs from "../Dialogs";
import Image from "next/image";

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
      <S.SidebarSearch>
        <div
          style={{
            position: "absolute",
            bottom: 11,
            left: 30,
          }}
        >
          <Image src={"/search.png"} alt={"search"} width={20} height={20} />
        </div>
        <S.SidebarInput placeholder="Поиск среди контактов"></S.SidebarInput>
      </S.SidebarSearch>
      <S.SidebarDialogs>
        <Dialogs
          userId={0}
          items={[
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "kj368df101a25289a5946282",
                fullName: "Clarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "d4e68hf1b07660f28ad51028b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659302430706,
              user: {
                _id: "ads68df101a25289a5946282",
                fullName: "Qlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "62e68df101a25289a5946282",
                fullName: "Tlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "12368df101a25289a5946282",
                fullName: "Hlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "kj368df101a25289a5946282",
                fullName: "Clarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "d4e68hf1b07660f28ad51028b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659302430706,
              user: {
                _id: "ads68df101a25289a5946282",
                fullName: "Qlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "62e68df101a25289a5946282",
                fullName: "Tlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "12368df101a25289a5946282",
                fullName: "Hlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "kj368df101a25289a5946282",
                fullName: "Clarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "d4e68hf1b07660f28ad51028b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659302430706,
              user: {
                _id: "ads68df101a25289a5946282",
                fullName: "Qlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "62e68df101a25289a5946282",
                fullName: "Tlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "12368df101a25289a5946282",
                fullName: "Hlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "kj368df101a25289a5946282",
                fullName: "Clarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "d4e68hf1b07660f28ad51028b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659302430706,
              user: {
                _id: "ads68df101a25289a5946282",
                fullName: "Qlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "62e68df101a25289a5946282",
                fullName: "Tlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "12368df101a25289a5946282",
                fullName: "Hlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "kj368df101a25289a5946282",
                fullName: "Clarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "d4e68hf1b07660f28ad51028b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659302430706,
              user: {
                _id: "ads68df101a25289a5946282",
                fullName: "Qlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "62e68df101a25289a5946282",
                fullName: "Tlarissa Lara",
                avatar: null,
              },
            },
            {
              _id: "62e68df1b07660f28ad5628b",
              text: "Tempor enim exercitation cillum occaecat. Aute laboris incididunt est nulla velit ipsum sunt qui elit. Occaecat commodo enim culpa deserunt.",
              created_at: 1659102430706,
              user: {
                _id: "12368df101a25289a5946282",
                fullName: "Hlarissa Lara",
                avatar: null,
              },
            },
          ]}
        />
      </S.SidebarDialogs>
    </S.Sidebar>
  );
};

export default Sidebar;
