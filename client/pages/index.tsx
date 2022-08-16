import type { NextPage } from "next";
import Chat from "../components/Chat";
import { connect } from "react-redux";
import Router from "next/router";
import CurrentDialog from "../components/CurrentDialog";
import { useEffect } from "react";
import SidebarContainer from "../containers/SidebarContainer";

type Props = {
  isAuth: boolean;
};

const Home: NextPage<Props> = ({ isAuth }) => {
  useEffect(() => {
    if (!isAuth) {
      Router.push("/signin");
    }
  }, []);
  return (
    <>
      <Chat>
        <SidebarContainer />
        <CurrentDialog />
      </Chat>
    </>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(Home);
