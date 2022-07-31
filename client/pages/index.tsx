import type { NextPage } from "next";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import CurrentDialog from "../components/CurrentDialog";

const Home: NextPage = () => {
  return (
    <>
      <Chat>
        <Sidebar></Sidebar>
        <CurrentDialog></CurrentDialog>
      </Chat>
    </>
  );
};

export default Home;
